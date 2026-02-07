const express = require("express");
const router = express.Router();
const condicionLaborController = require("../../controllers/condicionLabor");
const verificarToken = require("../../middleware/auth");

// Obtener todas las condiciones de labor
router.get("/", verificarToken, condicionLaborController.getAllCondicionesLabor);

// Obtener condición de labor por ID
router.get("/:id", verificarToken, condicionLaborController.getCondicionLaborById);

// Crear condición de labor
router.post("/", verificarToken, condicionLaborController.createCondicionLabor);

// Actualizar condición de labor
router.put("/:id", verificarToken, condicionLaborController.updateCondicionLabor);

// Eliminar condición de labor
router.delete("/:id", verificarToken, condicionLaborController.deleteCondicionLabor);

module.exports = router;
