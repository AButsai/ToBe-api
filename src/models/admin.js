const { Schema, model } = require('mongoose');
const Joi = require('joi');
const modelMethodPassword = require('../helpers/modelMethodPassword');
require('dotenv').config();
const { PHONE_ADMIN, EMAIL_ADMIN } = process.env;

const phoneRegex =
  /^[\+]?[0-9]{2}[(]?[0-9]{3}[)]?[0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
const messagePhoneRegex = {
  'string.pattern.base':
    'Invalid phone number format! Example: +38(099)999-99-99',
};

const admin = new Schema(
  {
    name: {
      type: String,
      default: 'admin',
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      default: EMAIL_ADMIN,
      required: [true, 'Email is required'],
    },
    phone: {
      type: String,
      default: PHONE_ADMIN,
      required: [true, 'Phone number is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      default: 'admin',
    },
    token: {
      type: String,
      default: '',
    },
    whiteList: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

modelMethodPassword(admin);

const whiteListJoiSchema = Joi.object({
  phone: Joi.string()
    .length(17)
    .regex(phoneRegex)
    .message(messagePhoneRegex)
    .required(),
});

const adminJoiSchema = {
  whiteListJoiSchema,
};

const Admin = model('admin', admin);

module.exports = {
  Admin,
  adminJoiSchema,
};
