const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrders);
router.post("/", orderController.orderRegister);
router.get("/:id_user", orderController.getOrdersByUserId);
router.delete("/:id", orderController.orderDelete);

module.exports = router;
