const { Gallery } = require('../../models');

const createGallery = async ({ title, owner }) => {
  const newGallery = new Gallery({ title, owner });
  await newGallery.save();
  return newGallery;
};

module.exports = createGallery;
