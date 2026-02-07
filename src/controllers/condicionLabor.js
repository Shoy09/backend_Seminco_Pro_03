const CondicionLabor = require('../../src/models/CondicionLabor');

// Obtener todas
exports.getAllCondicionesLabor = async (req, res) => {
  try {
    const condiciones = await CondicionLabor.findAll();
    res.json(condiciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener condiciones de labor' });
  }
};

// Obtener por ID
exports.getCondicionLaborById = async (req, res) => {
  try {
    const condicion = await CondicionLabor.findByPk(req.params.id);

    if (!condicion) {
      return res.status(404).json({ error: 'Condición no encontrada' });
    }

    res.json(condicion);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la condición' });
  }
};

// Crear
exports.createCondicionLabor = async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }

    const nuevaCondicion = await CondicionLabor.create({ nombre });
    res.status(201).json(nuevaCondicion);
  } catch (error) {
    console.error('❌ Error createCondicionLabor:', error);
    res.status(500).json({ error: 'Error al crear la condición' });
  }
};

// Actualizar
exports.updateCondicionLabor = async (req, res) => {
  try {
    const condicion = await CondicionLabor.findByPk(req.params.id);

    if (!condicion) {
      return res.status(404).json({ error: 'Condición no encontrada' });
    }

    await condicion.update(req.body);
    res.json(condicion);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la condición' });
  }
};

// Eliminar
exports.deleteCondicionLabor = async (req, res) => {
  try {
    const condicion = await CondicionLabor.findByPk(req.params.id);

    if (!condicion) {
      return res.status(404).json({ error: 'Condición no encontrada' });
    }

    await condicion.destroy();
    res.json({ message: 'Condición eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la condición' });
  }
};
