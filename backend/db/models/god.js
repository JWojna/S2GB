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
    godID: DataTypes.STRING,
    godName: DataTypes.STRING,
    title: DataTypes.STRING,
    pantheon: DataTypes.STRING,
    damageType: DataTypes.STRING,
    lore: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    pros: DataTypes.STRING,
    cons: DataTypes.STRING,
    iconURL: DataTypes.STRING,
    cardArtURL: DataTypes.STRING
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
