const express = require("express");
const router = express.Router();

const controller = require("../../controllers/auxiliaresLanzador");

// POST crear uno o varios
router.post("/", controller.create);

// GET general
router.get("/", controller.getAll);

// 🔥 GET pendientes de firma por jefe_guardia
router.get(
  "/pendientes",
  controller.getPendientesFirmaJefe
);

// PUT actualizar uno o varios
router.put("/", controller.update);

// UPDATE por id de padre + it
router.put("/update-it", controller.updateByPadreIt);

// DELETE eliminar padre + hijos
router.delete("/:id", controller.delete);

module.exports = router;
