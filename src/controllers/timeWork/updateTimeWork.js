const { RequestError, getOrCreateAdmin } = require('../../helpers');
const timeService = require('../../services/timeWork');

const updateTimeWork = async (req, res) => {
  const { everyDay, weekends, everyTime, weekendsTime } = req.body;
  const { id } = await getOrCreateAdmin();

  const timeWork = await timeService.getTimeWork(id);
  if (!timeWork) throw RequestError(400, 'No susch!');

  const newTimeWork = await timeService.updateTimeWork(timeWork._id, {
    everyTime,
    weekendsTime,
    weekends,
    everyDay,
  });
  res.status(200).json({ data: { timeWork: newTimeWork } });
};

module.exports = updateTimeWork;
