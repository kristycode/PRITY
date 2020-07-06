const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//---Creates layout for db
const Color = new Schema(
  {
    hexColor: { type: String, required: true },
    productType: { type: String, required: true },
    name: { type: String },
    brand: { type: String},
    color_name: { type: String},
    _creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("colors", Color);
