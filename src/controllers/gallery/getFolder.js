const { getFile } = require('../../helpers');
const galleryService = require('../../services/gallery');

const getFolder = async (req, res) => {
  const { folderId } = req.params;

  const folder = await galleryService.getFolderById(folderId);

  if (!folder) {
    return res.status(200).json({ data: { folder: [] } });
  }

  res.status(200).json({ data: { folder } });
};

module.exports = getFolder;
