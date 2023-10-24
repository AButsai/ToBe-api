const { Schema, model } = require('mongoose');
const Joi = require('joi');

const galleryFolder = new Schema(
  {
    title: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    fileName: {
      type: String,
    },
    items: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

const gallery = new Schema(
  {
    title: {
      type: String,
      default: 'Gallery',
    },
    folders: {
      type: Array,
      default: [],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'admin',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const addJoiSchema = Joi.object({});

const galleryJoiShcema = { addJoiSchema };
const GalleryFolder = model('folder', galleryFolder);
const Gallery = model('gallery', gallery);

module.exports = { Gallery, GalleryFolder, galleryJoiShcema };
