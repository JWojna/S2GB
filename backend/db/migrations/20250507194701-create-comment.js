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
        type: Sequelize.TEXT,
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
    });
    await queryInterface.addIndex('Comments', ['userId'], options);
    await queryInterface.addIndex('Comments', ['commentableType'], options);
    await queryInterface.addIndex('Comments', ['commentableId'], options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Comments';
    await queryInterface.dropTable(options);
  }
};
