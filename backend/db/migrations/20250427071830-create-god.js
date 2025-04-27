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
      godID: {
        type: Sequelize.STRING
      },
      godName: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      pantheon: {
        type: Sequelize.STRING
      },
      damageType: {
        type: Sequelize.STRING
      },
      lore: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.DATE
      },
      pros: {
        type: Sequelize.STRING
      },
      cons: {
        type: Sequelize.STRING
      },
      iconURL: {
        type: Sequelize.STRING
      },
      cardArtURL: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Gods'
    await queryInterface.dropTable(options);
  }
};
