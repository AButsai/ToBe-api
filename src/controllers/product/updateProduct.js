const productService = require('../../services/uploadProduct');
const { RequestError } = require('../../helpers');

const updateProduct = async (req, res) => {
  const { prodId } = req.params;
  const { body } = req;

  const product = await productService.updateProduct(prodId, body);
  if (!product) {
    throw RequestError(404, 'Bad request');
  }

  res.status(200).json({ data: { message: 'Product update' } });
};

module.exports = updateProduct;
