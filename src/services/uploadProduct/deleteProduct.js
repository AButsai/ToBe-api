const { Product } = require('../../models');

const deleteProduct = async id => {
  return await Product.findByIdAndDelete(id);
};

module.exports = deleteProduct;
