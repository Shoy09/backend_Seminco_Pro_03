const express = require("express");
const router = express.Router();
const controller = require("../../controllers/volquetes");

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get(
  "/pendientes",
  controller.getPendientesFirmaJefe
);
router.put("/", controller.update);
router.delete("/:id", controller.delete);
module.exports = router;
