const express = require('express');
const router = express.Router();

const controller = require('../../controllers/auxiliaresMixer.js');


// === GET GENERAL ===
router.get('/', controller.getAll);

router.get(
  "/pendientes",
  controller.getPendientesFirmaJefeMixer
);

// === POST (1 o varios) ===
router.post('/', controller.create);

// === PUT (1 o varios) ===
router.put('/', controller.update);

// UPDATE por id de padre + it
router.put("/update-it", controller.updateByPadreIt);

// === DELETE POR ID ===
router.delete('/:id', controller.delete);


module.exports = router;
