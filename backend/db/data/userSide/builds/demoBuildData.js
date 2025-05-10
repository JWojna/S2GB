module.exports = async function getDemoBuildData() {
  const { User, Item } = require('../../../models');

  const user = await User.findOne({ where: { username: 'SmiteEnjoyer' } });
  const userId = user?.id;

  const tier3ItemNames = [
    'Mystical Mail',
    'Ancile',
    'Death Metal',
    'Stampede',
    'Rage',
    'Magi`s Cloak'
  ];

  const items = await Item.findAll({
    where: {
      name: tier3ItemNames
    }
  });

  console.log("Queried Items:");
  items.forEach(item => console.log(item.name, item.id));


  const itemMap = {};
  items.forEach(item => {
    itemMap[item.name] = item.id;
  });

  if (Object.values(itemMap).some(id => id == null)) {
    throw new Error('Missing item(s) in itemMap');
  }

  return [
    {
      userId,
      godId: 'grACHIL',
      title: "DEMO BUILD",
      role: "Flex",
      buildDesc: "This is a DEMO BUILD.",
      itemData: {
        items: {
          slotOne: itemMap['Mystical Mail'],
          slotTwo: itemMap['Ancile'],
          slotThree: itemMap['Death Metal'],
          slotFour: itemMap['Stampede'],
          slotFive: itemMap['Rage'],
          slotSix: itemMap['Magi`s Cloak']
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
          slotOne: itemMap['Death Metal'],
          slotTwo: itemMap['Stampede'],
          slotThree: itemMap['Mystical Mail'],
          slotFour: itemMap['Rage'],
          slotFive: itemMap['Ancile'],
          slotSix: itemMap['Magi`s Cloak']
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
