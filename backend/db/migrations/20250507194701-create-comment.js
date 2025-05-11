'use strict';

//! production options
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      commentableType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      commentableId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options).then(() => {
      return Promise.all([
        queryInterface.addIndex({ tableName: 'Comments', ...options }, ['userId']),
        queryInterface.addIndex({ tableName: 'Comments', ...options }, ['commentableType']),
        queryInterface.addIndex({ tableName: 'Comments', ...options }, ['commentableId'])
      ])
    })
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeIndex({ tableName: 'Comments', ...options }, ['userId']),
      queryInterface.removeIndex({ tableName: 'Comments', ...options }, ['commentableType']),
      queryInterface.removeIndex({ tableName: 'Comments', ...options }, ['commentableId'])
    ]).then(() => {
      return queryInterface.dropTable('Comments', options)
    })
  }
};
