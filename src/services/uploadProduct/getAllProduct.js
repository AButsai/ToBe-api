const { Product } = require('../../models');

const getAllProduct = async owner => {
  return await Product.find({ owner });
};

module.exports = getAllProduct;
