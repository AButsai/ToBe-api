const { GalleryFolder } = require('../../../models');

const updateFolder = async (id, body) => {
  return await GalleryFolder.findByIdAndUpdate({ _id: id }, body, {
    new: true,
  });
};

module.exports = updateFolder;
