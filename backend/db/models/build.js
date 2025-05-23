'use strict';

const { isValidItemData, isValidAbilityDataWithRules } = require('./validators/validators');

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
      Build.belongsTo(models.User, { foreignKey: 'userId', as: "builds" });

      Build.hasMany(models.Comment, {
        foreignKey: 'commentableId',
        constraints: false,
        scope: { commentableType: 'build' },
        as: 'comments',
      });

    }
  }
  Build.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: "CASCADE"
    },
    godId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Flex",
      validate: {
        isIn: [['Carry', 'Solo', 'Support', 'Mid', 'Jungle', 'Flex']]
      }
    },
    buildDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    itemData: {
      type: DataTypes.JSONB,
      allowNull: false,
      validate: {
        isValidData(value) {
          if (!isValidItemData(value)) {
            throw new Error('Invalid itemData format')
          }
        }
      }
    },
    abilityData: {
      type: DataTypes.JSONB,
      allowNull: false,
      validate: {
        isValidAbilityData(value) {
          if (!isValidAbilityDataWithRules(value)) {
            throw new Error('Invalid abilityData format, or rules violation')
          }
        }
      }
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

  //! ON DELETE CASCADE LOGIC FOR POLY ASSOCS
  Build.addHook('afterDestroy', async (build, options) => {
    const { Comment } = require('../models');
    await Comment.destroy({
      where: {
        commentableType: 'Build',
        commentableId: build.id
      },
      transaction: options.transaction // preserves transaction scope if any
    });
  });

  Build.addHook('afterDestroy', async (build, options) => {
    const { Favorite } = require('../models');
    await Favorite.destroy({
      where: {
        favableType: 'Build',
        favableId: build.id
      },
      transaction: options.transaction
    });
  });

  return Build;
};
