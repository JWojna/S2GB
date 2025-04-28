'use strict';

const {
  Model
} = require('sequelize');

const damageTypes = ['Physical', 'Magical', 'Hybrid', 'Melee', 'Ranged'];
const scaleTypes = ['Strength', 'Intelligence', 'Hybrid'];

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
    damageType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isType(val) {
          if (!damageTypes.includes(val)) {
            throw new Error('Invalid damage type, check spelling, **Physical | Magical | Hybrid | Melee | Ranged**');
          };
        },
      },
    },
    scaleType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isType(val) {
          if (!scaleTypes.includes(val)) {
            throw new Error('Invalid scaleing type, check spelling, **Strength | Intelligence | Hybrid**');
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
    attkSec: {
      type: DataTypes.STRING,
      allowNull: false
    },
    physDef: {
      type: DataTypes.STRING,
      allowNull: false
    },
    magDef: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hpReg: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mpReg: {
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
