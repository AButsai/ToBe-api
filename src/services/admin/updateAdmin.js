const { Admin } = require('../../models');

const updateAdmin = async (adminID, body) => {
  return await Admin.findByIdAndUpdate({ _id: adminID }, body, {
    new: true,
  }).select({ createdAt: 0, updatedAt: 0, password: 0, __v: 0 });
};

module.exports = updateAdmin;
