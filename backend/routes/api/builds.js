const express = require('express');

const { Build, Item, God, Image, Comment } = require('../../db/models');

//^ utilities
const { cleanItemSlotMap, cleanBuildGod } = require('../../utils/cleaners');
const { hydrateBuildItems } = require('../../utils/hydrators');
const { requireAuth, checkOwnership } = require('../../utils/auth');
const { checkUserDupeComment } = require('../../utils/checkers');

const router = express.Router();

//! Get all builds
router.get('/', async (req, res) => {
    try {
        const builds = await Build.findAll();
        return res.json({ Builds: builds })
    } catch (error) {
        console.error('Error fetching builds:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//! Get builds owned by current user
router.get('/current', requireAuth, async (req, res) => {
    try {
        const builds = await Build.findAll({ where: { userId: req.user.id } });
        if (!builds) return res.status(404).json({ message: 'You dont have any builds' })
        return res.json({ Builds: builds })
    } catch (error) {
        console.error('Error fetching builds:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//! Get build details by buildId
router.get('/:buildId', async (req, res) => {
    try {
        const build = await Build.findByPk(req.params.buildId);
        if (!build) return res.status(404).json({ error: 'Build not found' });

        const itemNames = Object.values(build.itemData.items).filter(Boolean);
        const items = await Item.findAll({
            where: { name: itemNames },
            attributes: ['name', 'data'],
            include: [{ model: Image, as: 'Images', attributes: ['imageUrl'] }]
        });

        const god = await God.findOne({
            where: { godId: build.godId },
            attributes: ['godName', 'title', 'pantheon', 'stats', 'abilities'],
            include: [{ model: Image, as: 'Images', attributes: ['imageUrl'] }]
        });

        // clean and hydrate
        const hydratedItems = hydrateBuildItems(build.itemData.items, items);
        const cleanedItems = cleanItemSlotMap(hydratedItems);
        const cleanedGod = cleanBuildGod(god);

        return res.json({
            ...build.toJSON(),
            itemData: { ...build.itemData, items: cleanedItems, },
            god: cleanedGod
        });

    } catch (error) {
        console.error('Error fetching build details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//! Get comments on a build by build id
router.get('/:buildId/comments', async (req, res) => {
    try {
        const buildWithComments = await Build.findByPk(req.params.buildId, {
            include: { model: Comment, as: 'comments', attributes: ['body'] }
        });
        if (!buildWithComments) res.status(404).json({ message: `Build couldn't be found` })

        const buildComments = buildWithComments.comments
        res.json({ Comments: buildComments })
    } catch (error) {
        console.error('Error fetching comments:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    };
});

//! Create a build
//^ require auth to save

//! Edit a build
//^ require auth and ownership

// //! Delete a buil
// //^ require auth and ownership
// router.delete('/:buildId', requireAuth, checkOwnership(Build, 'buildId'), async (req, res) => {
//     try {
//         const build = await Build.findByPk(req.params.buildId);
//         if (!build) res.status(404).json({ message: 'Build couldn\'t be found' });

//         build.destroy();

//         res.json({ message: 'Successfully deleted' });
//     } catch (error) {
//         console.error('Error deleteing build:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

//! Create a comment for a build
//^ require auth
router.post('/:buildId/comments', requireAuth, async (req, res) => {
    try {
        const build = await Build.findByPk(req.params.buildId);
        if (!build) res.status(404).json({ message: 'Build couldn\'t be found' });
        if (build.userId === req.user.id) res.status(400).json({ message: 'You can\'t comment on your own build' })

        const dupeCheck = await checkUserDupeComment(req.user.id, build);
        if (dupeCheck) return res.status(400).json({ message: 'You already commented on this build' });

        const newComment = await Comment.create({
            userId: req.user.id,
            commentableType: build.constructor.name.toLowerCase(),
            commentableId: build.id,
            body: req.body.body
        });

        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        return res.status(500).json({ error: 'Internal server error' });
    };
});

//! Edit comment for a build
//^ req auth and ownership
router.put('/:buildId/comments/:commentId', requireAuth, checkOwnership(Comment, 'commentId'), async (req, res) => {
    try {
        const comment = await Comment.findOne({
            where: {
                id: req.params.commentId,
                commentableId: req.params.buildId,
                commentableType: 'build'
            }
        });

        comment.set({
            ...req.body
        })

        comment.save({ validate: true });

        return res.status(202).json(comment)
    } catch (error) {
        console.error('Error updating comment:', error);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
});

//! Delete a comment for a build
//^ require auth and ownership
router.delete('/:buildId/comments/:commentId', requireAuth, checkOwnership(Comment, 'commentId'), async (req, res) => {
    try {
        const comment = await Comment.findOne({
            where: {
                id: req.params.commentId,
                commentableId: req.params.buildId,
                commentableType: 'build'
            }
        });
        if (!comment) res.status(404).json({ message: 'Comment couldn\'t be found' });

        comment.destroy();

        res.json({ message: 'Successfully deleted' });
    } catch (error) {
        console.error('Error deleteing build:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;
