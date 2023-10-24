const { Gallery } = require('../../models');

const getGallery = async owner => {
  return await Gallery.findOne({ owner });
};

module.exports = getGallery;
