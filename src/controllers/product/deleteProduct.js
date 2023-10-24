const productService = require('../../services/uploadProduct');
const { deleteFileFromFirebase } = require('../../helpers');

const deleteProduct = async (req, res) => {
  const { prodId } = req.params;
  const product = await productService.getProductById(prodId);
  if (!product) {
    return res.status(200).json({ data: { product: [] } });
  }

  await deleteFileFromFirebase(product.fileName);
  await productService.deleteProduct(product._id);
  return res.status(200).json({ data: { message: 'Product deleted' } });
};

module.exports = deleteProduct;
