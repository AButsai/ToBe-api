const {
  RequestError,
  createToken,
  userRole,
  getOrCreateAdmin,
} = require('../../helpers');
const userService = require('../../services/user');

const register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  const { id } = await getOrCreateAdmin();

  const role = await userRole(phone);

  const isUser = await userService.getUserByPhone({ phone });
  if (isUser) throw RequestError(409, 'Email or Phone already registered');

  const newUser = await userService.createUser({
    name,
    email,
    phone,
    password,
    owner: id,
  });

  const token = createToken(newUser._id);

  const user = await userService.updateUser(newUser._id, { token, role });

  res.status(200).json({
    data: {
      user,
    },
  });
};

module.exports = register;
