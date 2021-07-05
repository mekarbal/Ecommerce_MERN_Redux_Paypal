const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    id_transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transactions",
    },
    products: [],

    totalPrice: {
      type: Number,
      required: true,
    },
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    address: {
      type: Object,
      required: true,
    },
    isLivred: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
