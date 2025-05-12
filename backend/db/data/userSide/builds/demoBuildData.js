module.exports = async function getDemoBuildData() {
  const { User } = require('../../../models');

  const user = await User.findOne({ where: { username: 'SmiteEnjoyer' } });
  const userId = user?.id;

  return [
    {
      userId,
      godId: 'grACHI',
      title: "DEMO BUILD",
      role: "Flex",
      buildDesc: "This is a DEMO BUILD.",
      itemData: {
        items: {
          slotOne: 'Mystical Mail',
          slotTwo: 'Ancile',
          slotThree: 'Death Metal',
          slotFour: 'Stampede',
          slotFive: 'Rage',
          slotSix: 'Magi\'s Cloak'
        },
        relic: null,
        consumables: {
          slotOne: null,
          slotTwo: null
        }
      },
      abilityData: {
        "1": "ab1", "2": "ab2", "3": "ab3", "4": "ab1", "5": "ab4",
        "6": "ab2", "7": "ab3", "8": "ab1", "9": "ab4", "10": "ab1",
        "11": "ab2", "12": "ab3", "13": "ab4", "14": "ab3", "15": "ab2",
        "16": "ab1", "17": "ab4", "18": "ab3", "19": "ab2", "20": "ab4"
      }
    },
    {
      userId,
      godId: 'arMERL',
      title: "DEMO BUILD TWO",
      role: "Flex",
      buildDesc: "demo build",
      itemData: {
        items: {
          slotOne: 'Death Metal',
          slotTwo: 'Stampede',
          slotThree: 'Mystical Mail',
          slotFour: 'Rage',
          slotFive: 'Ancile',
          slotSix: 'Magi\'s Cloak'
        },
        relic: null,
        consumables: {
          slotOne: null,
          slotTwo: null
        }
      },
      abilityData: {
        "1": "ab1", "2": "ab2", "3": "ab3", "4": "ab1", "5": "ab4",
        "6": "ab2", "7": "ab3", "8": "ab1", "9": "ab4", "10": "ab1",
        "11": "ab2", "12": "ab3", "13": "ab4", "14": "ab3", "15": "ab2",
        "16": "ab1", "17": "ab4", "18": "ab3", "19": "ab2", "20": "ab4"
      }
    }
  ];
};
