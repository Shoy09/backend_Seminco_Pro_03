const express = require("express");
const router = express.Router();
const espesorController = require("../../controllers/EspesoresController");
const verificarToken = require("../../middleware/auth");

// Obtener todos los espesores
router.get("/", verificarToken, espesorController.getAllEspesores);

// Obtener espesor por ID
router.get("/:id", verificarToken, espesorController.getEspesorById);

// Crear espesor
router.post("/", verificarToken, espesorController.createEspesor);

// Actualizar espesor
router.put("/:id", verificarToken, espesorController.updateEspesor);

// Eliminar espesor
router.delete("/:id", verificarToken, espesorController.deleteEspesor);

module.exports = router;
