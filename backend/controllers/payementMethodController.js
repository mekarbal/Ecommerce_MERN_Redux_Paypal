const PayementMathod = require("../models/payementMethod");

exports.getAllPayementMethods = async (req, res, next) => {
  try {
    const payementMethods = await PayementMathod.find();
    res.json(payementMethods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.payementMethodRegister = async (req, res, next) => {
  const payementMethod = new PayementMathod({
    name: req.body.name,
  });

  try {
    const savedPayemntMethod = await payementMethod.save();
    res.send(savedPayemntMethod);
  } catch (error) {
    res.send({ message: error.message });
  }
};

exports.DeletePayementMethod = async (req, res, next) => {
  try {
    const payementMethodDeleted = await PayementMathod.deleteOne({
      _id: req.body.id,
    });
    res.send(payementMethodDeleted);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.getPayementMethodByID = async (req, res, next) => {
  try {
    const payementMethod = await PayementMathod.findOne({ _id: req.params.id });
    res.status(201).send(payementMethod);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
