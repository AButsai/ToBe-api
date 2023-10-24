const express = require('express');

const controllerGallery = require('../../controllers/gallery');
const {
  controllerWrapper,
  tokenVerification,
  upload,
} = require('../../middlewares');

const galleryRouter = express.Router();

galleryRouter.get('/', controllerWrapper(controllerGallery.getOrCreateGallery));

galleryRouter.post(
  '/folder',
  upload.single('file'),
  tokenVerification,
  controllerWrapper(controllerGallery.addFolder)
);

galleryRouter.get(
  '/folder/:folderId',
  controllerWrapper(controllerGallery.getFolder)
);

galleryRouter.patch(
  '/folder/:folderId',
  tokenVerification,
  controllerWrapper(controllerGallery.updateFolder)
);

galleryRouter.delete(
  '/folder/:folderId',
  tokenVerification,
  controllerWrapper(controllerGallery.deleteFolder)
);

galleryRouter.post(
  '/folder/images/:folderId',
  tokenVerification,
  upload.single('file'),
  controllerWrapper(controllerGallery.uploadImagesToFolder)
);

galleryRouter.delete(
  '/folder/images/:folderId/:imgId',
  tokenVerification,
  controllerWrapper(controllerGallery.deleteImages)
);

module.exports = galleryRouter;
