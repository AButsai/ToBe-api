const { TimeWork } = require('../../models');

const getTimeWork = async owner => {
  return await TimeWork.findOne({ owner });
};

module.exports = getTimeWork;
