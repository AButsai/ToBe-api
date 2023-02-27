const { RequestError, createToken } = require('../../helpers');
const userService = require('../../services/user');

const loginUser = async (req, res) => {
  const { phone, password } = req.body;

  const candidate = await userService.getUserByPhone({ phone });

  if (!candidate || !candidate.validPassword(password)) {
    throw RequestError(
      400,
      'Phone is wrong or not verify, or password is wrong'
    );
  }

  const token = createToken(candidate.id);

  const user = await userService.updateUser(candidate.id, { token });

  res.status(200).json({
    data: {
      user,
    },
  });
};

module.exports = loginUser;
