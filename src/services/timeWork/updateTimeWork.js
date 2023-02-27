const { TimeWork } = require('../../models');

const updateTimeWork = async (_id, body) => {
  return await TimeWork.findByIdAndUpdate({ _id }, body, { new: true });
};

module.exports = updateTimeWork;
