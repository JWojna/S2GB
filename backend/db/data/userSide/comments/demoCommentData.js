module.exports = async function getDemoCommentData() {
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
            "commentableType": "build",
            "commentableId": buildOneId,
            "body": 'DEMO COMMENT ON BUILD ONE',
        },
        //! tsting polymorph
        {
            "userId": userId + 1, //! im being lazy
            "commentableType": "build",
            "commentableId": buildOneId,
            "body": 'DEMO COMMENT ON BUILD ONE FROM DIFF USER',
        },
        //! back to reg data
        {
            "userId": userId,
            "commentableType": "tier",
            "commentableId": tierOneId,
            "body": 'DEMO COMMENT TIER ONE',
        },
        {
            "userId": userId,
            "commentableType": "build",
            "commentableId": buildTwoId,
            "body": 'DEMO COMMENT BUILD TWO',
        },
        {
            "userId": userId,
            "commentableType": "tier",
            "commentableId": tierTwoId,
            "body": 'DEMO COMMENT TIER TWO',
        }
    ];
};
