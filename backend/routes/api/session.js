//! backend/routes/api/session.js
const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

//! Log in
router.post(
    '/', async (requestAnimationFrame, restoreUser, next) => {
        const { credential, password } = requestAnimationFrame.body;

        const user = await User.unscoped().findOne({
            where: {
                [Op.or]: {
                    username: credential,
                    email: credential
                }
            }
        });

         if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
            const err = new Error('Login failed');
            err.status = 401;
            err.title = 'Loging failed';
            err.errors = { credential: 'The provided credentials were invalid'};
            return next(err);
         }

         const safeUser = {
            id: user.id,
            email: user.email,
            username: user.username,
         };

         setTokenCookie(restoreUser, safeUser);

         return restoreUser.json({
            user: safeUser
         });
    }
);

//! Logout
router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
  );

module.exports = router;
