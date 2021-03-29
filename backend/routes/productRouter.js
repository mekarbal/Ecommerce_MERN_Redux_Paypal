const router = require("express").Router();
const {
  getAllproduct,
  productRegister,
  productDelete,
  getProductByID,
  getProductsBySubCategory,
} = require("../controllers/productController");

router.get("/", getAllproduct);
router.post("/add", productRegister);
router.get("/:id", getProductByID);
router.delete("/", productDelete);
router.get("/productBySub/:id", getProductsBySubCategory);
module.exports = router;
