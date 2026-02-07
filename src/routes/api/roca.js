const express = require("express");
const router = express.Router();
const rocaController = require("../../controllers/roca");
const verificarToken = require("../../middleware/auth");

// Obtener todas las rocas
router.get("/", verificarToken, rocaController.getAllRocas);

// Obtener roca por ID
router.get("/:id", verificarToken, rocaController.getRocaById);

// Crear roca
router.post("/", verificarToken, rocaController.createRoca);

// Actualizar roca
router.put("/:id", verificarToken, rocaController.updateRoca);

// Eliminar roca
router.delete("/:id", verificarToken, rocaController.deleteRoca);

module.exports = router;
