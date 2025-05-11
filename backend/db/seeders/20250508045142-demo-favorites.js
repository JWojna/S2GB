'use strict';

const { Favorite } = require('../models');


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const getDemoFavoritetData = require('../data/userSide/favorites/demoFavData');
      const demoFavoriteData = await getDemoFavoritetData();
      await Favorite.bulkCreate(demoFavoriteData);
    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Favorites';
    await queryInterface.bulkDelete(options);
  }
};
