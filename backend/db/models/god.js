'use strict';

const {
  Model
} = require('sequelize');


const tags = [
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
      God.hasMany(models.Image, {
        foreignKey: 'imageableId',
        constraints: false,
        sourceKey: 'godId',
        scope: {
          imageableType: 'god'
        },
        as: 'Images'
      })
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
      type: DataTypes.JSONB,
      allowNull: false,
      validate: {
        isValidTagArray(val) {
          if (!Array.isArray(val)) {
            throw new Error('Tags must be an array');
          }
          for (const tag of val) {
            if (!tags.includes(tag)) {
              throw new Error(`Invalid tag: ${tag}`);
            }
          }
        }
      },
      defaultValue: ['Coming Soon']
    },
    stats: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {}
    },
    abilities: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {}
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
      { fields: ['pantheon'] },
      { fields: ['tags'] },
    ]
  });
  return God;
};
