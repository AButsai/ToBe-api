const { Schema, model } = require('mongoose');
const Joi = require('joi');
const modelMethodPassword = require('../helpers/modelMethodPassword');

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]{2,}(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phoneRegex =
  /^[\+]?[0-9]{2}[(]?[0-9]{3}[)]?[0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
const messagePhoneRegex = {
  'string.pattern.base':
    'Invalid phone number format! Example: +38(099)999-99-99',
};

const userScema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    token: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['banned', 'user', 'super'],
      default: 'user',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'admin',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

modelMethodPassword(userScema);

const registrSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().pattern(emailRegex),
  phone: Joi.string()
    .length(17)
    .regex(phoneRegex)
    .message(messagePhoneRegex)
    .required(),
  password: Joi.string().trim().required(),
});

const loginSchema = Joi.object({
  phone: Joi.string()
    .length(17)
    .regex(phoneRegex)
    .message(messagePhoneRegex)
    .required(),
  password: Joi.string().trim().required(),
});

const roleSchema = Joi.object({
  role: Joi.string().valid('banned', 'user', 'super').required(),
});

const userJoiSchema = {
  registrSchema,
  loginSchema,
  roleSchema,
};

const User = model('user', userScema);

module.exports = {
  User,
  userJoiSchema,
};
