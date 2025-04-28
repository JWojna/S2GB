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
        type: Sequelize.STRING(6),
        allowNull: false,
        unique: true
      },
      godName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      pantheon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      damageType: {
        type: Sequelize.ENUM('Physical', 'Magical', 'Hybrid'),
        allowNull: false
      },
      scaleType: {
        type: Sequelize.ENUM('Strength', 'Intelligence', 'Hybrid'),
        allowNull: false
      },
      health: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mana: {
        type: Sequelize.STRING,
        allowNull: false
      },
      speed: {
        type: Sequelize.STRING,
        allowNull: false
      },
      attkSec: {
        type: Sequelize.STRING,
        allowNull: false
      },
      physDef: {
        type: Sequelize.STRING,
        allowNull: false
      },
      magDef: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hpReg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mpReg: {
        type: Sequelize.STRING,
        allowNull: false
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
