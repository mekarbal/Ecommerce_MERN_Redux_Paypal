const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const sousCategorySchema = new mongoose.Schema(
  {
    id_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      slug: "name",
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SousCategory", sousCategorySchema);
