const express = require('express');

const { Item, Image } = require('../../db/models');

const router = express.Router();

//! Get all items
router.get(
    '/', async (req, res) => {
        try {
            const items = await Item.findAll({
                include: [{
                    model: Image,
                    as: 'Images',
                    attributes: ['imageUrl'],
                }]
            })
            return res.json({ Items: items })
        } catch (error) {
            console.error('Error fetching items:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
)

//! Get god details by godId
router.get('/:itemId', async (req, res) => {
    try {
        const { itemId } = req.params;
        const item = await Item.findByPk(itemId, {
            include: [
                {
                    model: Image,
                    as: 'Images',
                    attributes: ['imageUrl']
                },
            ]
        });

        if (!item) {
            return res.status(404).json({ message: `Item couldn't be found` });
        };

        return res.json(item);
    } catch (error) {
        console.error('Error fetching god:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    };
});

module.exports = router
