'use strict';

//! production options
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Builds', {
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
      godId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "Flex"
      },
      buildDesc: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      itemData: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: {}
      },
      abilityData: {
        type: Sequelize.JSONB,
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
        queryInterface.addIndex({ tableName: 'Builds', ...options }, ['userId']),
        queryInterface.addIndex({ tableName: 'Builds', ...options }, ['godId']),
        queryInterface.addIndex({ tableName: 'Builds', ...options }, ['role'])
      ])
    })
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeIndex({ tableName: 'Builds', ...options }, ['userId']),
      queryInterface.removeIndex({ tableName: 'Builds', ...options }, ['godId']),
      queryInterface.removeIndex({ tableName: 'Builds', ...options }, ['role'])
    ]).then(() => {
      return queryInterface.dropTable('Builds', options)
    })
  }
};
