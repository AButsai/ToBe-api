const express = require('express');

const controllerUpload = require('../../controllers/product');
const {
  controllerWrapper,
  validationBody,
  tokenVerification,
  upload,
} = require('../../middlewares');
const { productJoiShcema } = require('../../models');

const productRouter = express.Router();

productRouter.get('/', controllerWrapper(controllerUpload.getAllProduct));

productRouter.post(
  '/',
  tokenVerification,
  upload.single('file'),
  validationBody(productJoiShcema.addJoiSchema),
  controllerWrapper(controllerUpload.addProduct)
);

productRouter.patch(
  '/:prodId',
  tokenVerification,
  validationBody(productJoiShcema.addJoiSchema),
  controllerWrapper(controllerUpload.updateProduct)
);

productRouter.delete(
  '/:prodId',
  tokenVerification,
  controllerWrapper(controllerUpload.deleteProduct)
);

module.exports = productRouter;
