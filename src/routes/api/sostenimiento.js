const express = require("express");
const router = express.Router();

const controller = require("../../controllers/registroLaborSostenimiento");

// ========================
// ====== CRUD BASE =======
// ========================

// Crear registro (con imágenes)
router.post("/", controller.create);

// Obtener todos los registros
router.get("/", controller.getAll);

// ========================
// ====== FILTROS ========
// ========================

// Actualizar Filtro 1
router.put("/filtro1/:id", controller.updateFiltro1);

// Actualizar Filtro 2
router.put("/filtro2/:id", controller.updateFiltro2);

// Actualizar Filtro 3
router.put("/filtro3/:id", controller.updateFiltro3);

module.exports = router;