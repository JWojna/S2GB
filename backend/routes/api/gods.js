const express = require('express');

const { God, Image } = require('../../db/models');
const { where } = require('sequelize');


const router = express.Router();

//! Get all gods
router.get(
    '/', async (req, res) => {
        try {
            const gods = await God.findAll({
                include: [{
                    model: Image,
                    as: 'Images',
                    attributes: ['imageUrl'],
                }]
            })
            return res.json({Gods: gods})
        } catch (error) {
            console.error('Error fetching gods:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
)

module.exports = router
