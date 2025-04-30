'use strict';

//! production options
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Abilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      godId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Gods',
          key: 'godId'
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Coming Soon'
      },
      slot: {
        type: Sequelize.ENUM(
          'basicAttack',
          'Ab1',
          'Ab2',
          'Ab3',
          'Ultimate',
          'Passive'
        ),
        allowNull: false,
      },
      tag: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'Coming Soon'
      },
      ranges: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'Coming Soon'
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'Coming Soon'
      },
      scaling: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: 'Coming Soon'
      },
      abilityValues: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'Coming Soon'
      },
      additionalEffects: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    }, options);
    //! ensure index is added to godId
    await queryInterface.addIndex('Abilities', ['godId'], options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Abilities'
    await queryInterface.dropTable(options);
  }
};
