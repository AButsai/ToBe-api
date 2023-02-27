const { Admin } = require('../models');
const { RequestError } = require('../helpers');

const isAdmin = async (req, res, next) => {
  const { id } = req.user;

  const admin = await Admin.findById(id);
  if (!admin) {
    next(RequestError(401, 'Not authorized'));
  }
  req.admin = admin;
  next();
};

module.exports = isAdmin;
