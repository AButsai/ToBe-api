const { Schema, model, trusted } = require('mongoose');

const image = new Schema({
  name: {
    type: String,
    required: trusted,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Image = model('image', image);

module.exports = Image;
