'use strict';

//! production options
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      godId: {
        type: Sequelize.STRING(6),
        allowNull: false,
        unique: true
      },
      godName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pantheon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tags: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: ['Coming Soon']
      },
      stats: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: {}
      },
      abilities: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: {}
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
        queryInterface.addIndex({ tableName: 'Gods', ...options }, ['pantheon'], { name: 'gods_panthon_idx' }),
        queryInterface.addIndex({ tableName: 'Gods', ...options }, ['tags'], { name: 'gods_tags_idx' })
      ])
    })
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeIndex({ tableName: 'Gods', ...options }, ['pantheon'], 'gods_panthon_idx'),
      queryInterface.removeIndex({ tableName: 'Gods', ...options }, ['tags'], 'gods_tags_idx')
    ]).then(() => {
      return queryInterface.dropTable('Gods', options)
    })
  }
};
