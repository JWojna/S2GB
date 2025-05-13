const { Comment } = require('../db/models')

const checkUserDupeComment = async (
    userId,
    commentableInstance
) => {
    if (!commentableInstance || !commentableInstance.constructor) {
        throw new Error('Invalid commentable instance');
    }

    const commentableType = commentableInstance.constructor.name;
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
