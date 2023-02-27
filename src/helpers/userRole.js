const getOrCreateAdmin = require('./getOrCreateAdmin');

const userRole = async phone => {
  const admin = await getOrCreateAdmin();

  for (const el of admin.whiteList) {
    if (el === phone) return 'super';
  }

  return 'user';
};

module.exports = userRole;
