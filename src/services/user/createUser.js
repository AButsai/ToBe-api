const { User } = require('../../models');

const createUser = async ({ name, email, phone, password, owner }) => {
  const newUser = new User({ name, email, phone, owner });
  newUser.setPassword(password);
  await newUser.save();
  return newUser;
};

module.exports = createUser;
