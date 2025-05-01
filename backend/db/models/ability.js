'use strict';


const {
  Model
} = require('sequelize');

const slots = [
  'basicAttack',
  'Ab1',
  'Ab2',
  'Ab3',
  'Ultimate',
  'Passive',
]

module.exports = (sequelize, DataTypes) => {
  class Ability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ability.belongsTo(models.God, { foreignKey: 'godId' });
    }
  }
  Ability.init({
    godId: { //^ hardcoded fkey to god
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Gods',
        key: 'godId'
      },
    },
    name: { //^ab name duh
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Coming Soon'
    },
    slot: { //^ what slot this is i.e ab1 etc
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isSlot(val) {
          if (!slots.includes(val)) {
            throw new Error('Invalid Slot tag')
          }
        }
      },
    },
    tag: {
      //! DASH / LINE / CONE / AREA / BUFF / DEBUFF
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Coming Soon'
    },
    ranges: {
      //! ABILITY GEOMETRY/RANGE INFO
      /*
      ^ CONE ANGLE, AREA RADIUS, DASH LENGTH ETC.
      ! Delim format:
      ^  ' - ' FOR NAME  VAL SPLIT
      ^  ' | ' FOR VAL SPLIT
      ^  ' --- ' FOR DATA SPLIT
      ^ Ex: 'Cone Angle - 45 --- Radius - 25 --- Dash Length - 35'
      */
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Coming Soon'
    },
    description: { //^abiltiy description
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'Coming Soon'
    },
    scaling: {
      //! POWER SCALINGS
        /*
        ^ Ex: 'Physical Power - 60% --- Attack Speed - 15% --- Max Health - 5%'
        */
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 'Coming Soon'
    },
    abilityValues: {
      //! STANDARD ABILITY VALUES
      /*
      ^ MAIN VALUE (DAMAGE/HEAL/SHIELD), COOLDOWN, RESOURCE COST
      ! Delim format:
      ^  ' - ' FOR NAME  VAL SPLIT
      ^  ' | ' FOR VAL SPLIT
      ^  ' --- ' FOR DATA SPLIT
      ^  Ex: '<NAME> - <VAL1 | VAL2...> --- Damage - 10 | 25 |...'
      */
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'Coming Soon'
    },
    additionalEffects: {
      //! BONUS ABILITY VALUES
      /*
      ^ BONUS (DAMAGE/HEAL/ATTKSPEED/ETC.)
      ! SYNTAX FOR DELIM
      ^ '<NAME> - <VAL1 | VAL2...> --- <NAME> - <VAL1 | VAL2...>'
      ^  ' - ' FOR NAME  VAL SPLIT
      ^  ' | ' FOR VAL SPLIT
      ^  ' --- ' FOR DATA SPLIT
      */
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Ability',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
    indexes: [
      { fields: ['godId'] },
    ]

  });
  return Ability;
};
