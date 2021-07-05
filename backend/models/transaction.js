const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    idPayementTransaction: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);
