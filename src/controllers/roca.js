const Roca = require('../../src/models/Roca');

// Obtener todas las rocas
exports.getAllRocas = async (req, res) => {
  try {
    const rocas = await Roca.findAll();
    res.json(rocas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener rocas' });
  }
};

// Obtener roca por ID
exports.getRocaById = async (req, res) => {
  try {
    const roca = await Roca.findByPk(req.params.id);

    if (!roca) {
      return res.status(404).json({ error: 'Roca no encontrada' });
    }

    res.json(roca);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la roca' });
  }
};

// Crear roca
exports.createRoca = async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }

    const nuevaRoca = await Roca.create({ nombre });
    res.status(201).json(nuevaRoca);
  } catch (error) {
    console.error('❌ Error createRoca:', error);
    res.status(500).json({ error: 'Error al crear la roca' });
  }
};

// Actualizar roca
exports.updateRoca = async (req, res) => {
  try {
    const roca = await Roca.findByPk(req.params.id);

    if (!roca) {
      return res.status(404).json({ error: 'Roca no encontrada' });
    }

    await roca.update(req.body);
    res.json(roca);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la roca' });
  }
};

// Eliminar roca
exports.deleteRoca = async (req, res) => {
  try {
    const roca = await Roca.findByPk(req.params.id);

    if (!roca) {
      return res.status(404).json({ error: 'Roca no encontrada' });
    }

    await roca.destroy();
    res.json({ message: 'Roca eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la roca' });
  }
};
