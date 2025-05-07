'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Build extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Build.belongsTo(models.User, { foreignKey: 'userId', as: "builds" })
    }
  }
  Build.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    godId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Flex"
    },
    buildDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    itemData: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    abilityData: {
      type: DataTypes.JSONB,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Build',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
    indexes: [
      { fields: ['userId'] },
      { fields: ['godId'] },
      { fields: ['role'] },
    ]
  });
  return Build;
};
