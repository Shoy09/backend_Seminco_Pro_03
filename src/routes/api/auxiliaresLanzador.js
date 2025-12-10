const express = require("express");
const router = express.Router();

const controller = require("../../controllers/auxiliaresLanzador");

// POST crear uno o varios
router.post("/", controller.create);

// GET general
router.get("/", controller.getAll);

// PUT actualizar uno o varios
router.put("/", controller.update);

// DELETE eliminar padre + hijos
router.delete("/:id", controller.delete);

module.exports = router;
