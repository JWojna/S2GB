'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TierList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TierList.belongsTo(models.User, { foreignKey: 'userId', as: "tierList" });

      TierList.hasMany(models.Comment, {
        foreignKey: 'commentableId',
        constraints: false,
        scope: { commentableType: 'Tier' },
        as: 'comments',
      });

    }
  }
  TierList.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: "CASCADE"
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tierData: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'TierList',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
    indexes: [
      { fields: ['userId'] },
    ]
  });


  //! ON DELETE CASCADE LOGIC FOR COMMENTS
  TierList.addHook('afterDestroy', async (tierList, options) => {
    const { Comment } = require('../models');
    await Comment.destroy({
      where: {
        commentableType: 'TierList',
        commentableId: tierList.id
      },
      transaction: options.transaction
    });
  });

  TierList.addHook('afterDestroy', async (tierList, options) => {
    const { Favorite } = require('../models');
    await Favorite.destroy({
      where: {
        favableType: 'TierList',
        favableId: tierList.id
      },
      transaction: options.transaction
    });
  });

  return TierList;
};
