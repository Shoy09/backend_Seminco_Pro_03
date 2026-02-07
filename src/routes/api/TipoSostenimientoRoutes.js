const express = require("express");
const router = express.Router();
const TipoSostenimientoController = require("../../controllers/TipoSostenimientoController");
const verificarToken = require("../../middleware/auth");

// Obtener todas las condiciones de labor
router.get("/", verificarToken, TipoSostenimientoController.getAllCondicionesLabor);

// Obtener condición de labor por ID
router.get("/:id", verificarToken, TipoSostenimientoController.getTipoSostenimientoById);

// Crear condición de labor
router.post("/", verificarToken, TipoSostenimientoController.createTipoSostenimiento);

// Actualizar condición de labor
router.put("/:id", verificarToken, TipoSostenimientoController.updateTipoSostenimiento);

// Eliminar condición de labor
router.delete("/:id", verificarToken, TipoSostenimientoController.deleteTipoSostenimiento);

module.exports = router;
