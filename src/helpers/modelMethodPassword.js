const bCrypt = require('bcrypt');

const modelMethodPassword = model => {
  model.methods.setPassword = function (password) {
    this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(10));
  };

  model.methods.validPassword = function (password) {
    return bCrypt.compareSync(password, this.password);
  };
};

module.exports = modelMethodPassword;
