const demoBuildData = {
  "userId": 1,
  "godId": 'grACHIL', // Example god
  "title": "Conquest Jungle Build",
  "role": "Jungle",
  "buildDesc": "High burst damage build focused on early rotations and late-game crit.",
  "itemData": {
    "items": [
      //! use tier 3 items for demo seeds
      { itemId: `${Item.id}`, slot: 1 },
      { itemId: `${Item.id}`, slot: 2 },
      { itemId: `${Item.id}`, slot: 3 },
      { itemId: `${Item.id}`, slot: 4 },
      { itemId: `${Item.id}`, slot: 5 },
      { itemId: `${Item.id}`, slot: 6 }
    ],
    "relic": `${Item.id}`,
    "consumables": [
      { itemId: `${Item.id}`, slot: 1 },
      { itemId: `${Item.id}`, slot: 2 },
    ]
  },
  "abilityData": {
    "1": "ab1",
    "2": "ab2",
    "3": "ab3",
    "4": "ab1",
    "5": "ab4",
    "6": "ab2",
    "7": "ab3",
    "8": "ab1",
    "9": "ab4",
    "10": "ab1",
    "11": "ab2",
    "12": "ab3",
    "13": "ab4",
    "14": "ab3",
    "15": "ab4",
    "16": "ab1",
    "17": "ab4",
    "18": "ab3",
    "19": "ab2",
    "20": "ab4"
  },
}

module.exports = demoBuildData;
