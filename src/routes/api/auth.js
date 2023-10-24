const express = require('express');

const {
  controllerWrapper,
  validationBody,
  tokenVerification,
} = require('../../middlewares');
const { userJoiSchema } = require('../../models');
const controllerAuth = require('../../controllers/auth');

const authRouter = express.Router();

authRouter.post(
  '/register',
  validationBody(userJoiSchema.registrSchema),
  controllerWrapper(controllerAuth.register)
);

authRouter.post(
  '/login',
  validationBody(userJoiSchema.loginSchema),
  controllerWrapper(controllerAuth.login)
);

authRouter.get(
  '/logout',
  tokenVerification,
  controllerWrapper(controllerAuth.logout)
);

module.exports = authRouter;
