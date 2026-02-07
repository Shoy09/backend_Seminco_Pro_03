const Espesor = require('../../src/models/Espesores');

// Obtener todos
exports.getAllEspesores = async (req, res) => {
  try {
    const espesores = await Espesor.findAll();
    res.json(espesores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener espesores' });
  }
};

// Obtener por ID
exports.getEspesorById = async (req, res) => {
  try {
    const espesor = await Espesor.findByPk(req.params.id);

    if (!espesor) {
      return res.status(404).json({ error: 'Espesor no encontrado' });
    }

    res.json(espesor);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el espesor' });
  }
};

// Crear
exports.createEspesor = async (req, res) => {
  try {
    const { espesor } = req.body;

    if (espesor === undefined || espesor === null) {
      return res.status(400).json({ error: 'El espesor es obligatorio' });
    }

    const nuevoEspesor = await Espesor.create({ espesor });
    res.status(201).json(nuevoEspesor);
  } catch (error) {
    console.error('❌ Error createEspesor:', error);
    res.status(500).json({ error: 'Error al crear el espesor' });
  }
};

// Actualizar
exports.updateEspesor = async (req, res) => {
  try {
    const espesor = await Espesor.findByPk(req.params.id);

    if (!espesor) {
      return res.status(404).json({ error: 'Espesor no encontrado' });
    }

    await espesor.update(req.body);
    res.json(espesor);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el espesor' });
  }
};

// Eliminar
exports.deleteEspesor = async (req, res) => {
  try {
    const espesor = await Espesor.findByPk(req.params.id);

    if (!espesor) {
      return res.status(404).json({ error: 'Espesor no encontrado' });
    }

    await espesor.destroy();
    res.json({ message: 'Espesor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el espesor' });
  }
};
