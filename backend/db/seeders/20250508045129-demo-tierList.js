'use strict';

const { TierList } = require('../models');


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const getDemoTierData = require('../data/userSide/tierLists/demoTierData');
    try {
      const demoTierdData = await getDemoTierData();
      await TierList.bulkCreate(demoTierdData);
    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'TierLists';
    await queryInterface.bulkDelete(options, {
      title: ['DEMO TIER LIST', 'DEMO TIER LIST TWO']
    });
  }
};
