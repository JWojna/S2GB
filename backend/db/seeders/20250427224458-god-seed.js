'use strict';

const { God } = require('../models');

const gods = require('../data/godsData/gods/index')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await God.bulkCreate(gods)
    } catch (error) {
      console.log(error);
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Gods';
    await queryInterface.bulkDelete(options);
  }
};
