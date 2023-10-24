const productService = require('../../services/uploadProduct');
const { uploadFirebase } = require('../../helpers');

const addProduct = async (req, res) => {
  const { id } = req.user;
  const { path: tempUpload, filename } = req.file;

  const [imageURL] = await uploadFirebase(tempUpload);
  const product = await productService.uploadProduct({
    imageURL,
    fileName: filename,
    ...req.body,
    owner: id,
  });
  res.status(200).json({ data: { product } });
};

module.exports = addProduct;
