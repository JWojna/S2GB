//! backend/routes/api/users.js
const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//! signup validation
const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

//! Sign up
router.post(
    '/',
    validateSignup,
    async (req, res) => {
        const { username, email, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password);
        const user = await User.create({ username, email, hashedPassword });

        const safeUser = {
        id: user.id,
        username: user.username,
        email: user.email,
        };

        setTokenCookie(res, safeUser);

        return res.json({
        user: safeUser
        });
    }
);

module.exports = router;
