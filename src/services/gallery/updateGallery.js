const { Gallery } = require('../../models');

const updateGallery = async (id, body) => {
  return await Gallery.findByIdAndUpdate({ _id: id }, body, { new: true });
};

module.exports = updateGallery;
