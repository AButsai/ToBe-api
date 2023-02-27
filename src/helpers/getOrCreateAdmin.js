const adminService = require('../services/admin');

const getOrCreateAdmin = async () => {
  const admin = await adminService.getAdmin({ role: 'admin' });

  if (!admin) {
    return await adminService.createAdmin();
  }

  return admin;
};

module.exports = getOrCreateAdmin;
