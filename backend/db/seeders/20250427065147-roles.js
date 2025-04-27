'use strict';

const { Role } = require('../models');

const seedRoles = require('../data/roleData');


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Role.bulkCreate(seedRoles);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Roles'
    await queryInterface.bulkDelete(options)
  }
};
