'use strict';

const { Comment } = require('../models');


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const getDemoCommentData = require('../data/userSide/comments/demoCommentData');
      const demoCommentdData = await getDemoCommentData();
      await Comment.bulkCreate(demoCommentdData);
    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Comments';
    await queryInterface.bulkDelete(options, {
      body: [
        'DEMO COMMENT ON BUILD ONE',
        'DEMO COMMENT TIER ONE',
        'DEMO COMMENT BUILD TWO',
        'DEMO COMMENT TIER TWO',
        'DEMO COMMENT ON BUILD ONE FROM DIFF USER'
      ]
    });
  }
};
