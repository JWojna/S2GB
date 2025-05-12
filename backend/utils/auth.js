//! backend/utils/auth.js
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

//! Sends a JWT Cookie
const setTokenCookie = (res, user) => {
  //! Create the token.
  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
  };
  const token = jwt.sign(
    { data: safeUser },
    secret,
    { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
  );

  const isProduction = process.env.NODE_ENV === "production";

  //! Set the token cookie
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, //! maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax"
  });

  return token;
};

//! restore user
const restoreUser = (req, res, next) => {
  //! token parsed from cookies
  const { token } = req.cookies;
  req.user = null;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.findByPk(id, {
        attributes: {
          include: ['email', 'createdAt', 'updatedAt']
        }
      });
    } catch (e) {
      res.clearCookie('token');
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};

//! route authenticator
//! If there is no current user, return an error
const requireAuth = function (req, _res, next) {
  if (req.user) return next();

  const err = new Error('Authentication required');
  err.title = 'Authentication required';
  err.errors = { message: 'Authentication required' };
  err.status = 401;
  return next(err);
};

//! ownership aka authorization middleware
const checkOwnership = (model, paramId, ownershipField = 'userId') => {
  return async (req, res, next) => {
    const id = req.params[paramId];
    const resource = await model.findByPk(id);

    if (!resource) {
      return res.status(404).json({ message: `${model.name} couldn't be found` });
    };

    if (resource[ownershipField] !== req.user.id) {
      return res.status(403).json({ message: `Forbidden` })
    };

    next();
  };
};


module.exports = { setTokenCookie, restoreUser, requireAuth, checkOwnership };
