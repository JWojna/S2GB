'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        as: "userComments"
      });
      Comment.belongsTo(models.Build, {
        foreignKey: 'commentableId',
        constraints: false,
        as: "buildComments"
      });
      Comment.belongsTo(models.TierList, {
        foreignKey: 'commentableId',
        constraints: false,
        as: "tierComments"
      });
    }
  }
  Comment.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: "CASCADE"
    },
    commentableType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commentableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: {
          args: [['build', 'tier']],
          msg: 'favableType must be build, tier'
        }
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: {
            args: [0, 255],
            msg: 'Bio cannot exceed 255 characters.'
          }
        }
    }
  }, {
    sequelize,
    modelName: 'Comment',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
    indexes: [
      { fields: ['userId'] },
      { fields: ['commentableType'] },
      { fields: ['commentableId'] },
    ]
  });

  Comment.addHook('afterFind', (findResult) => {
    if (!findResult) return;

    const handleInstance = (instance) => {
      switch (instance.commentableType) {
        case 'Build':
          if (instance.build) instance.commentable = instance.build;
          break;
        case 'TierList':
          if (instance.tierList) instance.commentable = instance.tierList;
          break;
      }

      // Clean up raw includes
      delete instance.build;
      delete instance.tierList;
      delete instance.dataValues.build;
      delete instance.dataValues.tierList;
    };

    if (Array.isArray(findResult)) {
      findResult.forEach(handleInstance);
    } else {
      handleInstance(findResult);
    }
  });


  return Comment;
};
