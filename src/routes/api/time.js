const express = require('express');

const {
  controllerWrapper,
  tokenVerification,
  isAdmin,
  validationBody,
} = require('../../middlewares');

const controllerTime = require('../../controllers/timeWork');
const { timeJoiSchema } = require('../../models');

const timeRouter = express.Router();

timeRouter.get('/', controllerWrapper(controllerTime.getTimeWork));

timeRouter.patch(
  '/',
  tokenVerification,
  isAdmin,
  validationBody(timeJoiSchema.addTimeJoiSchema),
  controllerWrapper(controllerTime.updateTimeWork)
);

module.exports = timeRouter;
