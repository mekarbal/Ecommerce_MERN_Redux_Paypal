const router = require("express").Router();
const {
  getAllCategories,
  categoryRegister,
  categoryDelete,
  getCategoryByID,
} = require("../controllers/categoryController");

router.get("/", getAllCategories);
router.post("/add", categoryRegister);
router.get("/:id", getCategoryByID);
router.delete("/", categoryDelete);
module.exports = router;
