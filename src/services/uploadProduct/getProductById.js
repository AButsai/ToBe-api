const { Product } = require('../../models');

const getProductById = async id => {
  return await Product.findById(id);
};

module.exports = getProductById;
