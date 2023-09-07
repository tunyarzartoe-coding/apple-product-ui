const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique:true
    },
    des: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
    },
    storage: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    warranty: {
      type: Boolean,
      default: false,
    },
    legalInformation: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
