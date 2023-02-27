const { User } = require('../../models');

const getUserById = async id => {
  return await User.findById({ _id: id }).select({ password: 0 });
};

module.exports = getUserById;
