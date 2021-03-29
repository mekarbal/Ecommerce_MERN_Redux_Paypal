const router = require("express").Router();
const {
  getAllPayementMethods,
  payementMethodRegister,
  DeletePayementMethod,
  getPayementMethodByID,
} = require("../controllers/payementMethodController");

router.get("/", getAllPayementMethods);
router.post("/", payementMethodRegister);
router.get("/:id", getPayementMethodByID);
router.delete("/", DeletePayementMethod);

module.exports = router;
