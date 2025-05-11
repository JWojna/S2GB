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
        queryInterface.addIndex({ tableName: 'Comments', ...options }, ['userId'], { ...options, name: 'comments_userId_idx' }),
        queryInterface.addIndex({ tableName: 'Comments', ...options }, ['commentableType'], { ...options, name: 'comments_commentableType_idx' }),
        queryInterface.addIndex({ tableName: 'Comments', ...options }, ['commentableId'], { ...options, name: 'comments_commentableId_idx' })
      ])
    })
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeIndex('Comments', 'comments_userId_idx', options ),
      queryInterface.removeIndex('Comments', 'comments_commentableType_idx', options ),
      queryInterface.removeIndex('Comments', 'comments_commentableId_idx', options )
    ]).then(() => {
      return queryInterface.dropTable('Comments', options)
    })
  }
};
