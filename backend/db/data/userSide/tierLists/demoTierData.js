const { godId } = require("../builds/demoBuildData");

const demoTierData = {
    "userId": 1,
    "title": "Jungle Tier List",
    "desc": "this is a jungle tier list",
    "tierData": {
        "sTier": [`${godId}`, `${godId}`],
        "aTier": [`${godId}`, `${godId}`],
        "bTier": [`${godId}`, `${godId}`],
        "cTier": [`${godId}`, `${godId}`],
        "dTier": [`${godId}`, `${godId}`],
        "fTier": [`${godId}`, `${godId}`],
    },
}

module.exports = demoTierData;
