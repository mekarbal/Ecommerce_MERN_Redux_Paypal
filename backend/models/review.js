const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    id_product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    star: {
      type: Number,
      required: true,
    },
    comment: {
      type: SchemaTypes.Double,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
