const { Comment } = require('../db/models')

const checkUserDupeComment = async (
    userId,
    commentableInstance
) => {
    if (!commentableInstance || !commentableInstance.constructor) {
        throw new Error('Invalid commentable instance');
    }
    const type = commentableInstance.constructor.name.toLowerCase()
    let commentableType;

    if (type === 'tierlist') {
        commentableType = 'tier';
    } else {
        commentableType = type;
    };

    const commentableId = commentableInstance.id;

    const existing = await Comment.findOne({
        where: {
            userId,
            commentableId,
            commentableType,
        },
    });

    return !!existing;
};

module.exports = {
    checkUserDupeComment
};
