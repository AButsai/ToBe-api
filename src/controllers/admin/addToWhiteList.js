const { RequestError, utils } = require('../../helpers');
const adminService = require('../../services/admin');

const addToWhiteList = async (req, res) => {
  const { id, whiteList } = req.admin;
  const { phone } = req.body;

  if (utils.whiteSheetCheck(whiteList, phone) !== -1) {
    throw RequestError(400, 'The contact exists in the whitelist');
  }
  const contacts = [phone, ...whiteList];

  await adminService.updateAdmin(id, { whiteList: contacts });

  res.status(200).json({ data: { message: 'Added to white list' } });
};

module.exports = addToWhiteList;
