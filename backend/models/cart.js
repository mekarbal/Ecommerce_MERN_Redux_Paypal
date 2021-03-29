const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    id_products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    totalPrice: {
      type: SchemaTypes.Double,
      required: true,
    },
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    qty: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// this model needs to fix some eerrors

module.exports = mongoose.model("cart", cartSchema);
