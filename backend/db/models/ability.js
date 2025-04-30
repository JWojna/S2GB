'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ability.init({
    abilityId: DataTypes.STRING,
    godId: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    stats: DataTypes.STRING,
    bonusEffects: DataTypes.STRING,
    bonusStats: DataTypes.STRING,
    cooldown: DataTypes.STRING,
    resourceCost: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ability',
  });
  return Ability;
};