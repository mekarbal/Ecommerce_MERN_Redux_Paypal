const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const productSchema = new mongoose.Schema(
  {
    id_ss_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "souscategories",
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    slug: {
      type: String,
      slug: "name",
    },
    description: {
      type: String,
      required: true,
    },
    countReviews: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
