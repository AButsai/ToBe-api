const { getOrCreateAdmin } = require('../../helpers');
const galleryService = require('../../services/gallery');

const updateFolder = async (req, res) => {
  const { folderId } = req.params;
  const { title } = req.body;
  const { id } = await getOrCreateAdmin();

  const candidate = await galleryService.getFolderById(folderId);
  if (!candidate) {
    return res.status(200).json({ data: { folder: [] } });
  }

  const folderUpdate = await galleryService.updateFolder(candidate.id, {
    title,
  });

  const gallery = await galleryService.getGallery(id);

  const folders = [...gallery.folders].map(folder =>
    folder._id.toString() === folderId ? { ...folder, title } : folder
  );

  await galleryService.updateGallery(gallery._id, {
    folders,
  });

  res.status(200).json({ data: { message: 'Folder update' } });
};

module.exports = updateFolder;
