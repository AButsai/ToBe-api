const { TimeWork } = require('../../models');

const createTimeWork = async id => {
  const time = new TimeWork({ owner: id });
  await time.save();
  return time;
};

module.exports = createTimeWork;
