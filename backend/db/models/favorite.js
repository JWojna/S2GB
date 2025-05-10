'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favorite.belongsTo(models.User, {
        foreignKey: 'userId',
        as: "favorites"
      });
      Favorite.belongsTo(models.TierList, {
        foreignKey: 'favableId',
        constraints: false,
        as: "tierFavorites"
      });
      Favorite.belongsTo(models.Build, {
        foreignKey: 'favableId',
        constraints: false,
        as: "buildFavorites"
      });
      Favorite.belongsTo(models.God, {
        foreignKey: 'favableId',
        constraints: false,
        as: "godFavorites"
      });

    }
  }
  Favorite.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: "CASCADE"
    },
    favableType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['build', 'tier', 'god']],
          msg: 'favableType must be build, tier, or god'
        }
      }
    },
    favableId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Favorite',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
    indexes: [
      {
        // prevent dupes
        unique: true,
        fields: ['userId', 'favableType', 'favableId'],
        name: 'unique_favorite_per_user'
      }
    ]
  });

  Favorite.addHook('afterFind', (findResult) => {
    if (!findResult) return;

    const handleInstance = (instance) => {
      switch (instance.favableType) {
        case 'Build':
          if (instance.build) instance.favable = instance.build;
          break;
        case 'TierList':
          if (instance.tierList) instance.favable = instance.tierList;
          break;
        case 'God':
          if (instance.god) instance.favable = instance.god;
          break;

      }

      // Clean up raw includes
      delete instance.build;
      delete instance.tierList;
      delete instance.god;
      delete instance.dataValues.build;
      delete instance.dataValues.tierList;
      delete instance.dataValues.god;
    };

    if (Array.isArray(findResult)) {
      findResult.forEach(handleInstance);
    } else {
      handleInstance(findResult);
    }
  });

  return Favorite;
};
