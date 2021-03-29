const SousCategory = require("../models/sousCategory");

exports.getAllSousCategories = async (req, res, next) => {
  try {
    const sscategory = await SousCategory.find();
    res.json(sscategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.sousCategoryRegister = async (req, res, next) => {
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

  const sscategory = new SousCategory({
    id_category: req.body.id_category,
    name: req.body.name,
    image: file.name,
  });

  try {
    const savedSousCategory = await sscategory.save();
    res.send({ savedSousCategory, filePath: `/images/${file.name}` });
  } catch (error) {
    res.send({ message: error.message });
  }
};

exports.sousCategoryDelete = async (req, res, next) => {
  try {
    const sousCategoryDeleted = await SousCategory.deleteOne({
      _id: req.body._idcategory,
    });
    res.send(sousCategoryDeleted);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.getSousCategoryByID = async (req, res, next) => {
  try {
    const sousCategory = await SousCategory.findOne({ _id: req.params.id });
    res.status(201).send(sousCategory);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//get Sub Category by category
exports.getSubCategoryByCategory = async (req, res) => {
  try {
    const subCategories = await SousCategory.find({})
      .where("id_category")
      .equals(req.params.id);
    res.send(subCategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
