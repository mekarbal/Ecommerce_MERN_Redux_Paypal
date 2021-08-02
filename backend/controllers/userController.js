const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middlewares/generateToken");
const Role = require("../models/role");
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.userRegister = async (req, res, next) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exist");

  const roles = await getAllRoles();
  let userRole = "";
  roles.map((user) => {
    if (user.name === "delivery") {
      userRole = user._id;
    }
  });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    id_role: userRole || "user",
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    await user.save();
    const roleFounded = await findRoleById(user.id_role);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      id_role: roleFounded.name,
      address: user.address,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

exports.UserDelete = async (req, res, next) => {
  console.log(req.params.id)
  try {
    const userDeleted = await User.deleteOne({
      _id: req.params.id,
    });
    res.send(userDeleted);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const roleFounded = await findRoleById(user.id_role);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      id_role: roleFounded.name,
      address: user.address,
      image: user.image,
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    if (user) {
      user.name = req.body.name || user.name;
      user.address = req.body.address || user.address;
      user.email = req.body.email || user.email;

      if (req.body.password) user.password = hashedPassword;

      const userUpdated = await user.save();
      const roleFounded = await findRoleById(user.id_role);
      res.json({
        _id: userUpdated._id,
        name: userUpdated.name,
        email: userUpdated.email,
        id_role: roleFounded,
        address: userUpdated.address,
        token: generateToken(userUpdated._id),
      });
    } else {
      res.status(404).send("User Not Found");
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    bcrypt.compare(password, user.password, async (err, result) => {
      if (result) {
        const roleFounded = await findRoleById(user.id_role);

        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          id_role: roleFounded,
          address: user.address,
          image: user.image,
          token: generateToken(user._id),
        });
      } else {
        res.status(401).send("Invalid email or password");
      }
    });
  } else {
    res
      .status(404)
      .send("User Not Found, Please try to register your infos before login");
  }
};

async function findRoleById(id) {
  const role = await Role.findById({ _id: id });
  return role;
}

async function getAllRoles() {
  const roles = await Role.find();
  return roles;
}

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};
