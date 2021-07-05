const Transaction = require("../models/transaction");

exports.getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    res.json({ data: transactions, error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

exports.transactionRegister = async (req, res, next) => {
  const transaction = new Transaction({
    idPayementTransaction: req.body.idPayementTransaction,
  });

  try {
    const savedTransaction = await transaction.save();
    res.json({ transactionsaved: savedTransaction, error: false });
  } catch (error) {
    res.send({ message: error.message, error: true });
  }
};

exports.transactionDelete = async (req, res, next) => {
  try {
    const transactionDeleted = await Transaction.deleteOne({
      _id: req.params.id,
    });
    res.json({ data: transactionDeleted, error: false });
  } catch (error) {
    res.status(400).json({ message: error.message, error: true });
  }
};
