const { RequestError, getOrCreateAdmin } = require('../../helpers');
const timeService = require('../../services/timeWork');

const getTimeWork = async (req, res) => {
  const { id } = await getOrCreateAdmin();

  const candidate = await timeService.getTimeWork(id);
  if (!candidate) {
    const timeWork = await timeService.createTimeWork(id);
    return res.status(200).json({ data: { timeWork } });
  }

  res.status(200).json({ data: { timeWork: candidate } });
};

module.exports = getTimeWork;
