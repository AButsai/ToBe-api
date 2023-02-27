const { GalleryFolder } = require('../../../models');

const getFolder = async title => {
  return await GalleryFolder.findOne({ title });
};

module.exports = getFolder;
