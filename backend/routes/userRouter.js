const router = require("express").Router();
const {
  getAllUsers,
  userRegister,
  UserDelete,
  getUserProfile,
  authUser,
  updateUserProfile,
  getUserById,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleWare");

router.get("/", getAllUsers);
router.post("/", userRegister);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/profile").get(protect, getUserById);
router.delete("/", UserDelete);
router.post("/login", authUser);

module.exports = router;
