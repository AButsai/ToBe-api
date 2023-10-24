const { getOrCreateAdmin, deleteFileFromFirebase } = require('../../helpers');
const galleryService = require('../../services/gallery');

const deleteFolder = async (req, res) => {
  const { folderId } = req.params;
  const { id } = await getOrCreateAdmin();

  const candidate = await galleryService.getFolderById(folderId);
  if (!candidate) {
    return res.status(200).json({ data: { folder: [] } });
  }

  await deleteFileFromFirebase(candidate.fileName);
  await galleryService.deleteFolder(candidate._id);

  const gallery = await galleryService.getGallery(id);
  const folders = gallery.folders.filter(
    folder => folder._id.toString() !== folderId
  );

  await galleryService.updateGallery(gallery._id, { folders });

  res.status(200).json({ data: { message: 'Folder deleted' } });
};

module.exports = deleteFolder;
