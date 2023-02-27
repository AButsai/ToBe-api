const express = require('express');

const { controllerWrapper, tokenVerification } = require('../../middlewares');
const controllerUser = require('../../controllers/user');

const userRouter = express.Router();

userRouter.get(
  '/current',
  tokenVerification,
  controllerWrapper(controllerUser.currentUser)
);

module.exports = userRouter;
