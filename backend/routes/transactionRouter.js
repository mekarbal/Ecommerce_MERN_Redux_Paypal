const router = require("express").Router();
const transactionController = require("../controllers/transactionController");

router.get("/", transactionController.getAllTransactions);
router.post("/", transactionController.transactionRegister);
router.delete("/:id", transactionController.transactionDelete);

module.exports = router;
