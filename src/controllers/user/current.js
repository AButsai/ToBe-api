const userService = require('../../services/user');
const adminSerice = require('../../services/admin');

const currentUser = async (req, res) => {
  const { id } = req.user;

  let admin = await adminSerice.getAdminById(id);
  if (admin) {
    return res.json({ data: { user: admin } });
  }

  const user = await userService.getUserById(id);

  res.json({ data: { user } });
};

module.exports = currentUser;
