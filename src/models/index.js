const { User, userJoiSchema } = require('./user');
const { Admin, adminJoiSchema } = require('./admin');
const { Product, productJoiShcema } = require('./product');
const { Gallery } = require('./gallery');
const { GalleryFolder } = require('./gallery');
const { TimeWork, timeJoiSchema } = require('./timeWork');

module.exports = {
  User,
  Admin,
  Product,
  Gallery,
  GalleryFolder,
  TimeWork,
  userJoiSchema,
  adminJoiSchema,
  productJoiShcema,
  timeJoiSchema,
};
