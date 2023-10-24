const { v4 } = require('uuid');
const { uploadFirebase } = require('../../helpers');
const galleryService = require('../../services/gallery');

const uploadImagesToFolder = async (req, res) => {
  const { folderId } = req.params;
  const { path: tempUpload, filename } = req.file;

  const candidate = await galleryService.getFolderById(folderId);
  if (!candidate) {
    return res.status(200).json({ data: { folder: [] } });
  }

  const [imageURL] = await uploadFirebase(tempUpload);

  const items = [
    ...candidate.items,
    { imageURL, fileName: filename, id: v4() },
  ];

  await galleryService.updateFolder(candidate._id, {
    items,
  });

  res.status(200).json({ data: { message: 'Images upload' } });
};

module.exports = uploadImagesToFolder;
