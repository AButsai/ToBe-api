const { Admin } = require('../../models');
require('dotenv').config();

const { ADMIN_PASSWORD } = process.env;

const createAdmin = async () => {
  const newAdmin = new Admin();
  newAdmin.setPassword(ADMIN_PASSWORD);
  await newAdmin.save();
  return newAdmin;
};

module.exports = createAdmin;
