const { Product } = require('../../models');

const updateProduct = async (id, body) => {
  return await Product.findByIdAndUpdate({ _id: id }, body, {
    new: true,
  }).select({
    owner: 0,
  });
};

module.exports = updateProduct;
