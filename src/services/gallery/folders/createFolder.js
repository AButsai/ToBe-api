const { GalleryFolder } = require('../../../models');

const createFolder = async (title, imageURL, filename) => {
  const folder = new GalleryFolder({
    title,
    imageURL,
    fileName: filename,
  });
  await folder.save();
  return folder;
};

module.exports = createFolder;
