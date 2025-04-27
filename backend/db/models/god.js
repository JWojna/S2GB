'use strict';
const {
  Model
} = require('sequelize');
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
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pantheon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: true
    },
    damageType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isType(val) {
          const types = ['Physical', 'Magical', 'Hybrid'];
          if (!types.includes(val)) {
            throw new Error('Invalid damage type, check spelling, **Physical | Magical | Hybrid**');
          };
        },
      },
    },
    scaleType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isType(val) {
          const types = ['Strength', 'Intelligence', 'Hybrid'];
          if (!types.includes(val)) {
            throw new Error('Invalid damage type, check spelling, **Strength | Intelligence | Hybrid**');
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
    lore: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'unavailable'
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
