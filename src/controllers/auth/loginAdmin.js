const { RequestError, createToken } = require('../../helpers');
const adminService = require('../../services/admin');

const loginAdmin = async (req, res) => {
  const { phone, password } = req.body;

  const candidate = await adminService.getAdmin({ phone });

  if (!candidate || !candidate.validPassword(password)) {
    throw RequestError(
      400,
      'Phone is wrong or not verify, or password is wrong'
    );
  }

  const token = createToken(candidate.id);

  const admin = await adminService.updateAdmin(candidate.id, { token });

  res.status(200).json({
    data: {
      user: admin,
    },
  });
};

module.exports = loginAdmin;
