const express = require('express');

const { Build, Item, God, Image } = require('../../db/models');

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
        }

        const godId = build.godId
        const god = await God.findOne({
            where: { godId },
            include: [
                {
                    model: Image,
                    as: 'Images',
                    attributes: ['imageUrl']
                },
            ]
        });

        return res.json({
            ...build.toJSON(),
            itemData: {
                ...build.itemData,
                items: hydratedItems,
                god
            },
        });

    } catch (error) {
        console.error('Error fetching build details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// //! Get builds owned by current user
// router.get('/current', requireAuth, async (req, res) => {
//   try {
//     const spots = await Spot.findAll({
//         where: {
//             ownerId: req.user.id
//         },
//         include: [{
//             model: Image,
//             as: 'Images',
//             where: { preview: true },
//             attributes: ['url'],
//             limit: 1
//         }],
//     });

//     const reviewAverages = await Review.findAll({
//         attributes: ['spotId', [fn('SUM', col('stars')), 'sumStars'], [fn('COUNT', col('stars')), 'reviewCount']],
//         group: ['spotId']
//     });

//     const avgRateMap = {};
//     reviewAverages.forEach( reviewAverage => {
//         const { spotId, sumStars, reviewCount } = reviewAverage.dataValues;
//         const avgRating = sumStars / reviewCount;
//         avgRateMap[spotId] = avgRating;
//     });

//     const responseData = spots.map(spot => {
//         const spotObj = spot.get();
//         delete spotObj.Images;

//         return {
//             ...spotObj,
//             createdAt: formatDateTime(spot.createdAt),
//             updatedAt: formatDateTime(spot.updatedAt),
//             avgRating: avgRateMap[spot.id] || 1,
//             previewImage: spot.Images[0]?.url || null
//         };
//     });

//     res.json({ Spots: responseData });
//   } catch (error) {
//     console.error('Error fetching spot:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   };
// });

module.exports = router
