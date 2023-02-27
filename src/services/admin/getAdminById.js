const { Admin } = require('../../models');

const getAdminById = async id => {
  return await Admin.findById({ _id: id }).select({ password: 0 });
};

module.exports = getAdminById;
