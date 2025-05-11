'use strict';

//! production options
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favorites', {
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
      favableType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      favableId: {
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
        queryInterface.addIndex({ tableName: 'Favorites', ...options }, ['userId']),
        queryInterface.addIndex({ tableName: 'Favorites', ...options }, ['favableType']),
        queryInterface.addIndex({ tableName: 'Favorites', ...options }, ['favableId'])
      ])
    })
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeIndex({ tableName: 'Favorites', ...options }, ['userId']),
      queryInterface.removeIndex({ tableName: 'Favorites', ...options }, ['favableType']),
      queryInterface.removeIndex({ tableName: 'Favorites', ...options }, ['favableId'])
    ]).then(() => {
      return queryInterface.dropTable('Favorites', options)
    })
  }
};
