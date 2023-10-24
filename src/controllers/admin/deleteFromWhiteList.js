const { RequestError, utils } = require('../../helpers');
const adminService = require('../../services/admin');

const deleteFromWhiteList = async (req, res) => {
  const { id, whiteList } = req.admin;
  const { phone } = req.body;

  if (utils.whiteSheetCheck(whiteList, phone) === -1) {
    throw RequestError(400, 'The contact does not exist in the whitelist');
  }
  const contacts = [...whiteList].filter(el => el !== phone);

  await adminService.updateAdmin(id, { whiteList: contacts });

  res.status(200).json({ data: { message: 'Removed from the white list' } });
};

module.exports = deleteFromWhiteList;
