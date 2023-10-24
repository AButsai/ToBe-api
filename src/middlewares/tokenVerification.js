const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User, Admin } = require('../models');
const { RequestError } = require('../helpers');

const secret = process.env.SECRET_WORD;

const tokenVerification = async (req, res, next) => {
  if (req.headers.authorization) {
    const [typeToken, token] = req.headers.authorization.split(' ');
    if (typeToken.toLowerCase() !== 'bearer') {
      next(RequestError(401, `Token type is not valid ${typeToken}`));
      return;
    }
    jwt.verify(token, secret, async (err, payload) => {
      if (err) {
        next(err);
      } else {
        let candidate = await Admin.findOne({ _id: payload.id });
        if (!candidate) {
          candidate = await User.findOne({ _id: payload.id });
        }

        if (!candidate || !candidate.token) {
          next(RequestError(401, 'Not authorized'));
        }
        req.user = candidate;
        next();
      }
    });
  } else {
    next(RequestError(401, 'Not authorized'));
  }
};

module.exports = tokenVerification;
