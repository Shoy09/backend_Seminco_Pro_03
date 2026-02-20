const express = require("express");
const router = express.Router();
const PernoSostenimientoController = require("../../controllers/PernoSostenimiento");
const verificarToken = require("../../middleware/auth");


// Obtener todos los pernos de sostenimiento
router.get("/", verificarToken, PernoSostenimientoController.getAllPernosSostenimiento);

// Obtener perno de sostenimiento por ID
router.get("/:id", verificarToken, PernoSostenimientoController.getPernoSostenimientoById);

// Crear perno de sostenimiento
router.post("/", verificarToken, PernoSostenimientoController.createPernoSostenimiento);

// Actualizar perno de sostenimiento
router.put("/:id", verificarToken, PernoSostenimientoController.updatePernoSostenimiento);

// Eliminar perno de sostenimiento
router.delete("/:id", verificarToken, PernoSostenimientoController.deletePernoSostenimiento);


module.exports = router;
