const { check, validationResult } = require('express-validator');
const { isValidTierData, checkIsObject } = require('./validators/validators')

//~ middleware for formatting errors from express-validator middleware
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = {};
        validationErrors
            .array()
            .forEach(error => errors[error.path] = error.msg);

        const err = Error('Bad request.');
        err.errors = errors;
        err.status = 400;
        err.title = 'Bad request.';
        next(err);
    }
    next();
};

//~ Tier list validations
const validateTierList = [
    check('title')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Title is required')
        .isLength({ min: 3, max: 50 })
        .withMessage('Title must be between 3 and 50 characters'),

    check('description')
        .optional({ checkFalsy: true })
        .isLength({ max: 250 })
        .withMessage('Description must be less than 250 characters'),

    check('tierData')
        .exists({ checkFalsy: true })
        .withMessage('Tier data is required')
        .custom((value) => {
            if (!isValidTierData(value)) {
                throw new Error('Invalid tier data format or duplicate god IDs');
            }
            return true;
        }),

    checkIsObject('tierData'),

    handleValidationErrors
];

module.exports = { handleValidationErrors, validateTierList };
