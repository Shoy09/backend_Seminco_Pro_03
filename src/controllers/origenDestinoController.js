const OrigenDestino = require('../models/OrigenDestino');

// GET todos
exports.getAll = async (req, res) => {
  try {
    const data = await OrigenDestino.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET por ID
exports.getById = async (req, res) => {
  try {
    const item = await OrigenDestino.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "No encontrado" });

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST crear
exports.create = async (req, res) => {
  try {
    const item = await OrigenDestino.create({
      operacion: req.body.operacion,
      tipo: req.body.tipo,
      tipo_labor: req.body.tipo_labor,
      labor: req.body.labor,
      ala: req.body.ala
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT actualizar
exports.update = async (req, res) => {
  try {
    const item = await OrigenDestino.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "No encontrado" });

    await item.update({
      operacion: req.body.operacion,
      tipo: req.body.tipo,
      tipo_labor: req.body.tipo_labor,
      labor: req.body.labor,
      ala: req.body.ala
    });

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE eliminar
exports.delete = async (req, res) => {
  try {
    const item = await OrigenDestino.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "No encontrado" });

    await item.destroy();
    res.json({ message: "Eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
