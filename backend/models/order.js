const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    id_transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transactions",
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
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

module.exports = mongoose.model("Order", orderSchema);
