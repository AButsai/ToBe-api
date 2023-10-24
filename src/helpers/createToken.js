const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET_WORD;

const createToken = id => {
  const payload = { id };
  return jwt.sign(payload, secret, { expiresIn: '100d' });
};

module.exports = createToken;
