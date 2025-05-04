'use strict';

const { Item } = require('../models');

const itemFiles = require('../data/items/index');
const items = Object.values(itemFiles);

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await Item.bulkCreate(items)

    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Items';
    await queryInterface.bulkDelete(options);
  }
};
