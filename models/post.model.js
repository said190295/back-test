const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {

    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('post', PostSchema);