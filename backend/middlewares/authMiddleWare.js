const jwt = require("jsonwebtoken");
const Role = require("../models/role");
const User = require("../models/user");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }

  if (!req.headers.authorization) {
    res.status(401).send("NO Authorized, No token");
  }
};

exports.admin = async (req, res, next) => {
  const role = await Role.findById(req.user && req.user.id_role);
  role && console.log(role.name);
  if (role && role.name === "admin") {
    next();
  } else {
    res.status(401).json({ message: "Not Authorized As an Admin" });
  }
};
