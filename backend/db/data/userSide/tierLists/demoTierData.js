module.exports = async function getDemoTierData() {
    const { User, God } = require('../../../models');

    const user = await User.findOne({ where: { username: 'SmiteEnjoyer' } });
    const userId = user?.id;

    const godFilter = [
        'grACHI',
        'hiAGNI',
        'taALAD',
        'jpAMA',
        'egANHU',
        'egANUB',
        'grAPHR',
        'grARES'
    ];

    const gods = await God.findAll({
        where: {
            godId: godFilter
        }
    });


    const godMap = {};
    gods.forEach(god => {
        godMap[god.godId] = god.godId;
    });

    if (Object.values(godMap).some(id => id == null)) {
        throw new Error('Missing god(s) in godMap');
    }

    return [
        {
            "userId": userId,
            "title": "DEMO TIER LIST",
            "desc": "this is a DEMO TIER LIST",
            "tierData": {
                "sTier": [godMap['grACHI'], godMap['egANHU']],
                "aTier": [godMap['hiAGNI'], godMap['jpAMA']],
                "bTier": [godMap['taALAD']],
                "cTier": [godMap['egANUB'], godMap['grAPHR']],
                "dTier": [godMap['grARES']],
                "fTier": [],
            }
        },
        {
            "userId": userId,
            "title": "DEMO TIER LIST TWO",
            "desc": "this is a DEMO TIER LIST",
            "tierData": {
                "sTier": [godMap['grACHI'], godMap['egANUB']],
                "aTier": [godMap['hiAGNI'], godMap['jpAMA'], godMap['egANHU']],
                "bTier": [godMap['taALAD']],
                "cTier": [],
                "dTier": [godMap['grARES']],
                "fTier": [godMap['grAPHR']],
            }
        },
    ];
};
