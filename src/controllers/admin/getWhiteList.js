const getWhiteList = async (req, res) => {
  const { whiteList } = req.admin;

  res.status(200).json({ data: { whiteList: whiteList } });
};

module.exports = getWhiteList;
