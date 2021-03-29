const router = require("express").Router();
const {
  getAllSousCategories,
  sousCategoryRegister,
  sousCategoryDelete,
  getSousCategoryByID,
  getSubCategoryByCategory,
} = require("../controllers/sousCategoryController");

router.get("/", getAllSousCategories);
router.post("/add", sousCategoryRegister);
router.get("/:id", getSousCategoryByID);
router.delete("/", sousCategoryDelete);
router.get("/subcat/:id", getSubCategoryByCategory);
module.exports = router;
