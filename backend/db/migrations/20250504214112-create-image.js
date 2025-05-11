'use strict';

//! production options
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageableType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imageableId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imageUrl: {
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
        queryInterface.addIndex({ tableName: 'Images', ...options }, ['imageableType'], { ...options, name: 'images_imageableType_idx' }),
        queryInterface.addIndex({ tableName: 'Images', ...options }, ['imageableId'], { ...options, name: 'images_imageableId_idx' })
      ])
    })
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeIndex({ tableName: 'Images', ...options }, { ...options, name: 'images_imageableType_idx' }),
      queryInterface.removeIndex({ tableName: 'Images', ...options }, { ...options, name: 'images_imageableId_idx' })
    ]).then(() => {
      return queryInterface.dropTable('Images', options)
    })
  }
};
