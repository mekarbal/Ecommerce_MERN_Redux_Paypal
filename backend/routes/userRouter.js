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
const { protect, admin } = require("../middlewares/authMiddleWare");

router.get("/", protect, admin, getAllUsers);
router.post("/", userRegister);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/:id").get(protect, getUserById);
router.delete("/:id",protect, admin, UserDelete);
router.post("/login", authUser);

module.exports = router;
