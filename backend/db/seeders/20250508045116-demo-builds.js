'use strict';

const { Build } = require('../models');


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const getDemoBuildData = require('../data/userSide/builds/demoBuildData');
      const demoBuildData = await getDemoBuildData();
      await Build.bulkCreate(demoBuildData);
    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Builds';
    await queryInterface.bulkDelete(options, {
      title: ['DEMO BUILD', 'DEMO BUILD TWO']
    });
  }
};
