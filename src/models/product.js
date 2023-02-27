const { Schema, model } = require('mongoose');
const Joi = require('joi');

const requaredField = 'Field is required';

const isRequired = function () {
  return this.role === 'product';
};

const product = new Schema(
  {
    imageURL: {
      type: String,
      required: [true, requaredField],
      default: '',
    },
    fileName: {
      type: String,
      required: [true, requaredField],
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    urlChoose: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    sale: {
      type: Number,
      default: 0,
    },
    vegan: {
      type: Boolean,
      default: false,
    },
    spicy: {
      type: Boolean,
      default: false,
    },
    novelty: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ['banner', 'product'],
      required: [true, requaredField],
      default: 'product',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'admin',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

product.path('title').required(isRequired, requaredField);
product.path('description').required(isRequired, requaredField);
product.path('urlChoose').required(isRequired, requaredField);
product.path('price').required(isRequired, requaredField);

const addJoiSchema = Joi.alternatives().conditional(
  Joi.object({ role: 'product' }).unknown(),
  {
    then: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      urlChoose: Joi.string().required(),
      price: Joi.number().required(),
      sale: Joi.number().required(),
      role: Joi.string().valid('banner', 'product').required(),
      vegan: Joi.boolean().required(),
      spicy: Joi.boolean().required(),
      novelty: Joi.boolean().required(),
    }),
    otherwise: Joi.object({
      title: Joi.string(),
      description: Joi.string(),
      urlChoose: Joi.string(),
      price: Joi.number(),
      sale: Joi.number(),
      role: Joi.string().valid('banner', 'product').required(),
      vegan: Joi.boolean(),
      spicy: Joi.boolean(),
      novelty: Joi.boolean(),
    }),
  }
);

const productJoiShcema = { addJoiSchema };

const Product = model('product', product);

module.exports = { Product, productJoiShcema };
