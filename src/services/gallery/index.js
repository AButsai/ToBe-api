const getGallery = require('./getGallery');
const createGallery = require('./createGallery');
const updateGallery = require('./updateGallery');
const {
  createFolder,
  getFolder,
  updateFolder,
  deleteFolder,
  getFolderById,
} = require('./folders');

module.exports = {
  getGallery,
  createGallery,
  updateGallery,
  createFolder,
  getFolder,
  updateFolder,
  deleteFolder,
  getFolderById,
};
