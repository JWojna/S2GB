'use strict';

const { User } = require('../models');

const seedUsers = require('../data/userSide/users/demoUserData');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(seedUsers);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    await queryInterface.bulkDelete(options);
  }
};
