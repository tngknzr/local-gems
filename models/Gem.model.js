const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

const gemSchema = new Schema(
  {
    gemName: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    venueName: {
      type: String,
      required: true,
    },

    imgUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const Gem = model('Gem', gemSchema);

module.exports = Gem;
