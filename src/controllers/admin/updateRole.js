const userService = require('../../services/user');

const updateRole = async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  const user = await userService.updateUser(userId, { role });

  res.status(200).json({ data: { user } });
};

module.exports = updateRole;
