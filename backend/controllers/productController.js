const Product = require("../models/product");

exports.getAllproduct = async (req, res, next) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.productRegister = async (req, res, next) => {
  if (req.files === null) {
    res.status(404).send({ message: "no file Uploaded" });
  }
  const file = req.files.file;

  file.mv(`${__dirname}/../../frontend/public/images/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });

  const product = new Product({
    id_ss_category: req.body.id_ss_category,
    name: req.body.name,
    price: req.body.price,
    image: file.name,
    description: req.body.description,
    countInStock: req.body.countInStock,
    slug: req.body.slug,
  });

  try {
    const savedProduct = await product.save();
    res.send({ savedProduct, filePath: `/images/${file.name}` });
  } catch (error) {
    res.send({ message: error.message });
  }
};

exports.productDelete = async (req, res, next) => {
  try {
    const productdeleted = await Product.deleteOne({
      _id: req.body._idproduct,
    });
    res.send(productdeleted);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.getProductByID = async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
//get All products by sub category
exports.getProductsBySubCategory = async (req, res) => {
  try {
    const products = await Product.find({})
      .where("id_ss_category")
      .equals(req.params.id);
    res.send(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
