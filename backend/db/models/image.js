'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Image.belongsTo(models.God, { foreignKey: 'imageableId', constraints: false, as: 'godImages' }),
        Image.belongsTo(models.Item, { foreignKey: 'imageableId', constraints: false, as: 'itemImages' })
    }
  }
  Image.init({
    imageType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageableType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageableId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Image',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
    indexes: [
      { fields: ['imageType'] },
      { fields: ['imageableType'] },
    ]
  });

  Image.addHook('afterFind', findResult => {
    if (!findResult) {
      return
    };
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
      if (instance?.imageableType && instance.Images) {
        instance.imageable = instance.Images[0];
      }
      // To prevent mistakes:
      delete instance.Images;
      delete instance.dataValues.Images;
    }
  });

  return Image;
};
