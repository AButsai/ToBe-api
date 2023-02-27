const { Product } = require('../../models');

const uploadProduct = async body => {
  const newProduct = new Product(body);
  await newProduct.save();
  return newProduct;
};

module.exports = uploadProduct;
