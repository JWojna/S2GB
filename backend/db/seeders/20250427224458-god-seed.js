'use strict';

const { God } = require('../models');

const seedGods = require('../data/godsData/gods/index')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await God.bulkCreate(seedGods)
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Gods';
    await queryInterface.bulkDelete(options);
  }
};
