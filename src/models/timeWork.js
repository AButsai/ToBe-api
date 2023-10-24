const { Schema, model } = require('mongoose');
const Joi = require('joi');

const timeRegex = /^[0-9]{2}[:][0-9]{2}[-][0-9]{2}[:][0-9]{2}$$/;
const messageTimeRegex = {
  'string.pattern.base': 'Data entered incorrectly! Example: 11:00-22:00',
};

const timeWork = new Schema(
  {
    everyDay: {
      type: String,
      required: true,
      default: 'Вс-Ср',
    },
    everyTime: {
      type: String,
      required: true,
      default: '11:00-21:00',
    },
    weekends: {
      type: String,
      required: true,
      default: 'Чт-Сб',
    },
    weekendsTime: {
      type: String,
      required: true,
      default: '11:00-22:00',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'admin',
      required: true,
    },
  },
  { versionKey: false }
);

const addTimeJoiSchema = Joi.object({
  everyTime: Joi.string().regex(timeRegex).message(messageTimeRegex).required(),
  weekendsTime: Joi.string()
    .regex(timeRegex)
    .message(messageTimeRegex)
    .required(),
});

const timeJoiSchema = {
  addTimeJoiSchema,
};

const TimeWork = model('timeWork', timeWork);

module.exports = { TimeWork, timeJoiSchema };
