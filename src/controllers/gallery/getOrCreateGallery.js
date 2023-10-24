const { getOrCreateAdmin } = require('../../helpers');
const galleryService = require('../../services/gallery');

const getOrCreateGallery = async (req, res) => {
  const { id } = await getOrCreateAdmin();

  const gallery = await galleryService.getGallery(id);
  if (!gallery) {
    const createGallery = await galleryService.createGallery({ owner: id });
    return res.status(200).json({ data: { gallery: createGallery } });
  }

  res.status(200).json({ data: { gallery } });
};

module.exports = getOrCreateGallery;
