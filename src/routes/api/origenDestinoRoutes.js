const express = require('express');
const router = express.Router();
const controller = require('../../controllers/origenDestinoController');

// GET todos
router.get('/', controller.getAll);

// GET por ID
router.get('/:id', controller.getById);

// POST crear
router.post('/', controller.create);

// PUT actualizar
router.put('/:id', controller.update);

// DELETE eliminar
router.delete('/:id', controller.delete);

module.exports = router;
