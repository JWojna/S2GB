const express = require('express');

const { Favorite } = require('../../db/models');
const { requireAuth} = require('../../utils/auth');

const router = express.Router();

//! creat/delete fav toggle
router.post('/toggle', requireAuth, async (req, res) => {
  const { favoritableType, favoritableId } = req.body;
  const userId = req.user.id;

  if (!favoritableType || !favoritableId) {
    return res.status(400).json({ error: 'Missing favoritableType or favoritableId' });
  }

  try {
    const existing = await Favorite.findOne({
      where: { userId, favoritableType, favoritableId }
    });

    if (existing) {
      await existing.destroy();
      return res.status(200).json({ favorited: false });
    } else {
      await Favorite.create({ userId, favableType, favableId });
      return res.status(201).json({ favorited: true });
    }
  } catch (err) {
    console.error('Favorite toggle error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

//! Get all favorites of current user
//^ req auth
router.get('/current', requireAuth, async (req, res) => {
  const  userId  = req.user.id;
  const { type } = req.query;

  const where = { userId };
  if (type) where.favableType = type;

  try {
    const favorites = await Favorite.findAll({
      where,
      attributes: ['favoritableId', 'favoritableType', 'createdAt'],
      order: [['createdAt', 'DESC']],
    });

    res.json(favorites);
  } catch (err) {
    console.error('Failed to fetch favorites:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
