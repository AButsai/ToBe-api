const productService = require('../../services/uploadProduct');
const { getOrCreateAdmin } = require('../../helpers');

const getAllProduct = async (req, res) => {
  const { id } = await getOrCreateAdmin();

  const products = await productService.getAllProduct(id);
  if (!products) {
    return res.status(200).json({ data: { products: [] } });
  }

  res.status(200).json({ data: { products } });
};

module.exports = getAllProduct;
