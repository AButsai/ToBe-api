const express = require('express');

const {
  controllerWrapper,
  validationBody,
  tokenVerification,
  isAdmin,
} = require('../../middlewares');
const controllerAdmin = require('../../controllers/admin');
const { userJoiSchema, adminJoiSchema } = require('../../models');

const adminRouter = express.Router();

adminRouter.use(tokenVerification, isAdmin);

adminRouter.get('/users', controllerWrapper(controllerAdmin.getAllUsers));

adminRouter.patch(
  '/:userId/update-role',
  validationBody(userJoiSchema.roleSchema),
  controllerWrapper(controllerAdmin.updateRole)
);

adminRouter.get('/white-list', controllerWrapper(controllerAdmin.getWhiteList));

adminRouter.post(
  '/add-to-white-list',
  validationBody(adminJoiSchema.whiteListJoiSchema),
  controllerWrapper(controllerAdmin.addToWhiteList)
);

adminRouter.delete(
  '/delete-from-white-list',
  validationBody(adminJoiSchema.whiteListJoiSchema),
  controllerWrapper(controllerAdmin.deleteFromWhiteList)
);

module.exports = adminRouter;
