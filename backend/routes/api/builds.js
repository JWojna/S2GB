const express = require('express');

const { Build, Item, God, Image, Comment } = require('../../db/models');


//^ utilities
const { cleanItemSlotMap, cleanBuildGod } = require('../../utils/cleaners');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

//! Get all builds
router.get(
    '/', async (req, res) => {
        try {
            const builds = await Build.findAll();
            return res.json({ Builds: builds })
        } catch (error) {
            console.error('Error fetching builds:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
)

//! Get build details by buildId
router.get('/:buildId', async (req, res) => {
    try {
        const build = await Build.findByPk(req.params.buildId);
        if (!build) return res.status(404).json({ error: 'Build not found' });

        const itemNames = Object.values(build.itemData.items).filter(Boolean);

        // Hydrate items from names
        const items = await Item.findAll({
            where: { name: itemNames },
            attributes: ['name', 'data'],
            include: [{ model: Image, as: 'Images', attributes: ['imageUrl'] }]
        });

        // Map items by name
        const itemMap = {};
        items.forEach(item => {
            itemMap[item.name] = item;
        });

        // Replace itemData.items slot values with full item objects
        const hydratedItems = {};
        for (const [slot, name] of Object.entries(build.itemData.items)) {
            hydratedItems[slot] = name ? itemMap[name] || null : null;
        };

        //clean hidrated items
        const cleanedItems = cleanItemSlotMap(hydratedItems)

        const godId = build.godId
        const god = await God.findOne({
            where: { godId },
            attributes: ['godName', 'title', 'pantheon', 'stats', 'abilities'],
            include: [
                {
                    model: Image,
                    as: 'Images',
                    attributes: ['imageUrl']
                },
            ]
        });

        //clean god object
        const cleanedGod = cleanBuildGod(god)

        return res.json({
            ...build.toJSON(),
            itemData: {
                ...build.itemData,
                items: cleanedItems,
            },
            god: cleanedGod
        });

    } catch (error) {
        console.error('Error fetching build details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//! Get builds owned by current user
router.get('/current', requireAuth, async (req, res) => {
    try {
        const builds = await Build.findAll({ where: { userId: req.user.id } });
        return res.json({ Builds: builds })
    } catch (error) {
        console.error('Error fetching builds:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//! Get comments on a build by build id
router.get('/:buildId/comments', async (req, res) => {
    try {
        const buildWithComments = await Build.findByPk(req.params.buildId, {
            include: {
                model: Comment,
                as: 'comments',
                attributes: ['body']
            }
        });

        if (!buildWithComments) res.status(404).json({ message: `Build couldn't be found` })

        const buildComments = buildWithComments.comments

        res.json({ Comments: buildComments })
    } catch (error) {
        console.error('Error fetching comments:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    };
});

module.exports = router
