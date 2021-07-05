const Order = require("../models/order");

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.json({ data: orders, error: false });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

exports.orderRegister = async (req, res, next) => {
  const order = new Order({
    id_transaction: req.body.id_transaction,
    products: req.body.products,
    totalPrice: req.body.totalPrice,
    id_user: req.body.id_user,
    address: req.body.address,
  });

  try {
    const savedOrder = await order.save();
    res.json({ order: savedOrder, error: false });
  } catch (error) {
    res.send({ message: error.message });
  }
};

exports.getOrdersByUserId = async (req, res) => {
  try {
    const orders = await Order.find({})
      .where("id_user")
      .equals(req.params.id_user);
    res.json({ orders: orders, error: false });
  } catch (err) {
    res.status(500).json({ message: err.message, error: true });
  }
};

exports.orderDelete = async (req, res, next) => {
  try {
    const orderDeleted = await Order.deleteOne({
      _id: req.params.id,
    });
    res.json({ orderDeleted: orderDeleted, error: false });
  } catch (error) {
    res.status(400).send({ message: error.message, error: true });
  }
};
