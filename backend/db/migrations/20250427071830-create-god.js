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
        type: Sequelize.ENUM('|', //! pipe just in case
          'Area Control',
          'Brawler',
          'Buffs',
          'Burst Damage',
          'Coming Soon',
          'Constant Damage',
          'Execute',
          'Global',
          'Healing',
          'Hybrid',
          'INT',
          'Lockdown',
          'Magical',
          'Melee',
          'Mobile',
          'Nuker',
          'Physical',
          'Pressure',
          'Ranged',
          'Sharpshooter',
          'Shielding',
          'Slayer',
          'Sniper',
          'Stealth',
          'STR',
          'Sustain',
          'Tank',),
        allowNull: false
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
    }, options);
    //! ensure indexes are added
    await queryInterface.addIndex('Gods', ['godId'], { unique: true, ...options });
    await queryInterface.addIndex('Gods', ['godName'], { unique: true, ...options });
    await queryInterface.addIndex('Gods', ['pantheon'], options);
    await queryInterface.addIndex('Gods', ['tags'], options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Gods'
    await queryInterface.dropTable(options);
  }
};
