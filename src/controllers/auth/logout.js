const userService = require('../../services/user');

const logout = async (req, res) => {
  const { id } = req.user;
  await userService.updateUser(id, { token: null });
  res.status(204).json({
    message: 'No Connect',
  });
};

module.exports = logout;
