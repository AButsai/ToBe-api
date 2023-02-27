const adminService = require('../../services/admin');

const loginAdmin = require('./loginAdmin');
const loginUser = require('./loginUser');

const login = async (req, res) => {
  const { phone } = req.body;

  const isAdmin = await adminService.getAdmin({ phone });

  if (isAdmin) {
    await loginAdmin(req, res);
  } else {
    await loginUser(req, res);
  }
};

module.exports = login;
