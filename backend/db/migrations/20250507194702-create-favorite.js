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
        queryInterface.addIndex({ tableName: 'Favorites', ...options }, ['userId'], { ...options, name: 'favorites_userId_idx' }),
        queryInterface.addIndex({ tableName: 'Favorites', ...options }, ['favableType'], { ...options, name: 'favorites_favableType_idx' }),
        queryInterface.addIndex({ tableName: 'Favorites', ...options }, ['favableId'], { ...options, name: 'favorites_favableId_idx' })
      ])
    })
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeIndex('Favorites', 'favorites_userId_idx', options),
      queryInterface.removeIndex('Favorites', 'favorites_favableType_idx', options),
      queryInterface.removeIndex('Favorites', 'favorites_favableId_idx', options)
    ]).then(() => {
      return queryInterface.dropTable('Favorites', options);
    });
  }
};
