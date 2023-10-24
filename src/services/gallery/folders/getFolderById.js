const { GalleryFolder } = require('../../../models');

const getFolderById = async id => {
  return await GalleryFolder.findById(id);
};

module.exports = getFolderById;
