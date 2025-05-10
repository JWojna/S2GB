module.exports = async function getDemoFavoritetData() {
    const { User, Build, TierList } = require('../../../models');

    const user = await User.findOne({ where: { username: 'Manny' } });
    const userId = user?.id;

    const buildOne = await Build.findOne({ where: { title: 'DEMO BUILD' } })
    const buildOneId = buildOne?.id
    const buildTwo = await Build.findOne({ where: { title: 'DEMO BUILD TWO' } })
    const buildTwoId = buildTwo?.id

    const tierOne = await TierList.findOne({ where: { title: 'DEMO TIER LIST' } })
    const tierOneId = tierOne?.id
    const tierTwo = await TierList.findOne({ where: { title: 'DEMO TIER LIST TWO' } })
    const tierTwoId = tierTwo?.id



    return [
        {
            "userId": userId,
            "favableType": "build",
            "favableId": buildOneId,
        },
        {
            "userId": userId,
            "favableType": "build",
            "favableId": buildTwoId,
        },
        {
            "userId": userId,
            "favableType": "tier",
            "favableId": tierOneId,
        },
        {
            "userId": userId,
            "favableType": "tier",
            "favableId": tierTwoId,
        },
        //! poly seed
        {
            "userId": userId + 1,
            "favableType": "tier",
            "favableId": tierTwoId,
        },
    ];
};
