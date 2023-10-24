const { isValidObjectId } = require('mongoose');
const { RequestError } = require('../helpers');

const isValidId = (req, res, next) => {
  const { userId } = req.params;
  const id = userId;
  const correctId = isValidObjectId(id);

  if (!correctId) {
    next(RequestError(400, `${id} is not correct id format`));
  }

  next();
};

module.exports = isValidId;
