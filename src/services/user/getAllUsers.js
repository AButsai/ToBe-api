const { User } = require('../../models');

const getAllUsers = async id => {
  return await User.find({ owner: id }).select({ password: 0, owner: 0 });
};

module.exports = getAllUsers;
