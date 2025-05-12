const express = require('express');

const { TierList, God, Image, Comment } = require('../../db/models');

//^ utils
const { requireAuth, checkOwnership } = require('../../utils/auth');
const { validateTierList } = require('../../utils/validation');

const router = express.Router();

//! Get all tierlists
router.get('/', async (req, res) => {
    try {
        const TierLists = await TierList.findAll();
        return res.json({ TierLists: TierLists })
    } catch (error) {
        console.error('Error fetching Tier Lists:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//! Get Tier details by id
router.get('/:tierListId', async (req, res) => {
    const tierList = await TierList.findByPk(req.params.tierListId);
    return res.json(tierList)
})

//! Get tier lists owned by current user
router.get('/current', requireAuth, async (req, res) => {
    try {
        const tierLists = await TierList.findAll({ where: { userId: req.user.id } });
        return res.json({ TierLists: tierLists })
    } catch (error) {
        console.error('Error fetching tier lists:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//! Get comments on a tier list by tier list id
router.get('/:tierListId/comments', async (req, res) => {
    try {
        const listWithComments = await TierList.findByPk(req.params.tierListId, {
            include: {
                model: Comment,
                as: 'comments',
                attributes: ['body']
            }
        });

        if (!listWithComments) res.status(404).json({ message: `Tier list couldn't be found` })

        const tierListComments = listWithComments.comments

        res.json({ Comments: tierListComments })
    } catch (error) {
        console.error('Error fetching comments:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    };
});


//! Create a tier list
//^ require auth to save
router.post('/', requireAuth, validateTierList, async (req, res) => {
    const { title, description, tierData } = req.body;
    try {
        const newTierList = await TierList.create({
            userId: req.user.id,
            title,
            description,
            tierData
        }, { validate: true });

        return res.status(201).json(newTierList)
    } catch (error) {
        console.error('Error creating tier list:', err);
        return res.status(500).json({ error: 'Internal server error' });
    };
});


//! Edit a tier list
//^ require auth and ownership
router.put('/tierListId', requireAuth, checkOwnership(TierList), validateTierList, async (req, res) => {
    try {
        const tierList = await TierList.findByPk(req.params.spotId)
        tierList.set({
            ...req.body
        });

        tierList.save({ validate: true })

        return res.status(200).json(tierList);
    } catch (error) {
        console.error('Error updating tier list:', error);
        return res.status(500).json({ error: 'Internal Server Error' })
    };
});

//! Delete a tier list
//^ require auth and ownership
router.delete('/:tierListId', requireAuth, checkOwnership(TierList), async (req, res) => {
    try {
        const tierList = await TierList.findByPk(req.params.tierListId);
        if (!tierList) res.status(404).json({ message: 'Tier list couldn\'t be found' });

        tierList.destroy();

        res.json({ message: 'Successfully deleted' });
    } catch (error) {
        console.error('Error deleteing tier list:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//! Create a comment for a tier list
//^ require auth

//! Get all favorite tier lists of current user
//^ req auth

//! Create fav by tier list id
//^ req auth

//! Delete Fav by tier list id
//^ req auth


module.exports = router;
