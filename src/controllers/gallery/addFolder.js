const {
  RequestError,
  getOrCreateAdmin,
  uploadFirebase,
} = require('../../helpers');
const galleryService = require('../../services/gallery');

const addFolder = async (req, res) => {
  const { id } = await getOrCreateAdmin();
  const { title } = req.body;
  const { path: tempUpload, filename } = req.file;
  const candidate = await galleryService.getFolder(title);

  if (candidate) {
    throw RequestError(400, 'A folder with the same name exists');
  }

  const [imageURL] = await uploadFirebase(tempUpload);
  const folder = await galleryService.createFolder(title, imageURL, filename);
  const gallery = await galleryService.getGallery(id);

  const folders = [...gallery.folders, folder];

  await galleryService.updateGallery(gallery._id, {
    folders,
  });

  res.status(200).json({ data: { message: 'Folder created', folder } });
};

module.exports = addFolder;
