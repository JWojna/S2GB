'use strict';

const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Build, { foreignKey: 'userId', as: 'builds' });
      User.hasMany(models.TierList, { foreignKey: 'userId', as: 'tierList' });
      User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' });
      User.hasMany(models.Favorite, { foreignKey: 'userId', as: 'favorites' });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [4, 30],
            msg: 'Username must be between 4 and 30 charecters long.'
          },
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error('Cannot be an email.')
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [3, 256],
            msg: 'Email must be longer lan 3 charecters'
          },
          isEmail: {
            args: true,
            msg: 'Must be a valid email.'
          }
        },
      },
      hashedPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [60, 60],
            msg: 'password must be 60 charecters long hashed'
          }
        },
      },
      smite2IGN: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          let: {
            args: [1, 12],
            msg: 'In game name must be between 1 and 12 charecters long.'
          }
        },
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 255],
            msg: 'Bio cannot exceed 255 characters.'
          }
        }
      },
      lastLogin: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
  });
  return User;
};
