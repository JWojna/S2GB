'use strict';

const {
  Model
} = require('sequelize');


const tags = ['|', //! pipe just in case
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
  'Tank',
];

module.exports = (sequelize, DataTypes) => {
  class God extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  God.init({
    godId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    godName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pantheon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isType(val) {
          if (!tags.includes(val)) {
            throw new Error('Invalid tag');
          };
        },
      },
    },
    stats: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: ['Coming Soon']
    },
    abilities: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: ['Coming Soon']
    },
  }, {
    sequelize,
    modelName: 'God',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
    indexes: [
      { unique: true, fields: ['godId'] },
      { unique: true, fields: ['godName'] },
      { fields: ['pantheon'] },
      { fields: ['tags'] },
    ]
  });
  return God;
};
