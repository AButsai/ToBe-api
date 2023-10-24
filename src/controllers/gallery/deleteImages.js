const galleryService = require('../../services/gallery');
const { deleteFileFromFirebase } = require('../../helpers');

const deleteImages = async (req, res) => {
  const { folderId, imgId } = req.params;

  const candidate = await galleryService.getFolderById(folderId);
  if (!candidate) {
    res.status(200).json({ data: { folder: [] } });
  }

  for (const item of candidate.items) {
    if (item.id === imgId) {
      await deleteFileFromFirebase(item.fileName);
    }
  }
  const items = [...candidate.items].filter(item => item.id !== imgId);

  await galleryService.updateFolder(candidate._id, { items });

  res.status(200).json({ data: { message: 'Images deleted' } });
};

module.exports = deleteImages;
