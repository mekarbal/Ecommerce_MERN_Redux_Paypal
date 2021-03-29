const Role = require("../models/role");

exports.getAllRoles = async (req, res, next) => {
  try {
    const role = await Role.find();
    res.json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.RoleRegister = async (req, res, next) => {
  const role = new Role({
    name: req.body.name,
  });

  try {
    const savedRole = await role.save();
    res.send(savedRole);
  } catch (error) {
    res.send({ message: error.message });
  }
};

exports.RoleDelete = async (req, res, next) => {
  try {
    const roledeleted = await Role.deleteOne({
      _id: req.body._idrole,
    });
    res.send(roledeleted);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.getRoleByID = async (req, res, next) => {
  try {
    const role = await Role.findOne({ _id: req.params.id });
    res.status(201).send(role);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
