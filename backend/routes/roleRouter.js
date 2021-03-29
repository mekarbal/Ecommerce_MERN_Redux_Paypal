const router = require("express").Router();
const {
  getAllRoles,
  RoleRegister,
  RoleDelete,
  getRoleByID,
} = require("../controllers/roleController");

router.get("/", getAllRoles);
router.post("/", RoleRegister);
router.get("/:id", getRoleByID);
router.delete("/", RoleDelete);

module.exports = router;
