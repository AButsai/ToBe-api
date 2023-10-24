const userService = require('../../services/user');

const getAllUsers = async (req, res) => {
  const { id } = req.admin;

  const allUsers = await userService.getAllUsers(id);
  if (!allUsers) {
    return res.status(200).json({ data: { users: [] } });
  }

  res.status(200).json({ data: { users: allUsers } });
};

module.exports = getAllUsers;
