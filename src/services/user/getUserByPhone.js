const { User } = require('../../models');

const getUserByPhone = async phone => {
  return await User.findOne(phone);
};

module.exports = getUserByPhone;
