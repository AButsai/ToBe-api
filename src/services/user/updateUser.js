const { User } = require('../../models');

const updateUser = async (userID, body) => {
  return await User.findByIdAndUpdate({ _id: userID }, body, {
    new: true,
  }).select({ createdAt: 0, updatedAt: 0, password: 0, owner: 0 });
};

module.exports = updateUser;
