const { Admin } = require('../../models');

const getAdminByPhone = async field => {
  return await Admin.findOne(field).select({
    __v: 0,
  });
};

module.exports = getAdminByPhone;
