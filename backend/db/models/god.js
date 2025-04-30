'use strict';

const {
  Model
} = require('sequelize');


const tags = [
  'Physical',
  'Magical',
  'Melee',
  'Ranged',
  'Hybrid',
  'STR',
  'INT',
  'Sharpshooter',
  'Nuker',
  'Slayer',
  'Lockdown',
  'Shielding',
  'Stealth',
  'Buffs',
  'Brawler',
  'Tank',
  'Mobile',
  'Global',
  'Healing',
  'Execute',
  'Sniper',
]

module.exports = (sequelize, DataTypes) => {
  class God extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  God.init({
    godID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    godName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    health: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mana: {
      type: DataTypes.STRING,
      allowNull: false
    },
    speed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    baseAttackSpeed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attackSpeedPrecent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    physProt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    magProt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hp5: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mp5: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'God',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    }
  });
  return God;
};
