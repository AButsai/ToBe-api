const { GalleryFolder } = require('../../../models');

const deleteFolder = async id => {
  await GalleryFolder.findByIdAndDelete(id);
};

module.exports = deleteFolder;
