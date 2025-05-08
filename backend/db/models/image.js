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

  Image.addHook('afterFind', (findResult) => {
    if (!findResult) return;
    const results = Array.isArray(findResult) ? findResult : [findResult];

    for (const instance of results) {
      switch (instance.imageableType) {
        case 'god':
          if (instance.godImages?.length) {
            instance.imageable = instance.godImages[0];
          }
          break;
        case 'item':
          if (instance.itemImages?.length) {
            instance.imageable = instance.itemImages[0];
          }
          break;
        default:
          break;
      }

      // Clean up to avoid leaking include data
      delete instance.godImages;
      delete instance.itemImages;
      delete instance.dataValues?.godImages;
      delete instance.dataValues?.itemImages;
    }
  });


  return Image;
};
