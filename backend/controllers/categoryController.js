const Category = require("../models/category");

exports.getAllCategories = async (req, res, next) => {
  try {
    const category = await Category.find();
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.categoryRegister = async (req, res, next) => {
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

  const category = new Category({
    name: req.body.name,
    image: file.name,
  });

  try {
    const savedCategory = await category.save();
    res.send({ savedCategory, filePath: `/images/${file.name}` });
  } catch (error) {
    res.send({ message: error.message });
  }
};

exports.categoryDelete = async (req, res, next) => {
  try {
    const categorydeleted = await Category.deleteOne({
      _id: req.body._idcategory,
    });
    res.send(categorydeleted);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.getCategoryByID = async (req, res, next) => {
  try {
    const category = await Category.findOne({ _id: req.params.id });
    res.status(201).send(category);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
