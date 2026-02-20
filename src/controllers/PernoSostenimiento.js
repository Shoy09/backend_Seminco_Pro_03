const PernoSostenimiento = require('../../src/models/PernoSostenimiento');


// Obtener todos
exports.getAllPernosSostenimiento = async (req, res) => {
  try {

    const pernos = await PernoSostenimiento.findAll({
      order: [['id', 'ASC']]
    });

    res.json(pernos);

  } catch (error) {

    console.error('❌ Error getAllPernosSostenimiento:', error);

    res.status(500).json({
      error: 'Error al obtener los pernos de sostenimiento'
    });

  }
};



// Obtener por ID
exports.getPernoSostenimientoById = async (req, res) => {
  try {

    const perno = await PernoSostenimiento.findByPk(req.params.id);

    if (!perno) {
      return res.status(404).json({
        error: 'Perno de sostenimiento no encontrado'
      });
    }

    res.json(perno);

  } catch (error) {

    console.error('❌ Error getPernoSostenimientoById:', error);

    res.status(500).json({
      error: 'Error al obtener el perno de sostenimiento'
    });

  }
};



// Crear
exports.createPernoSostenimiento = async (req, res) => {
  try {

    const { nombre, longitud } = req.body;

    // Validaciones
    if (!nombre) {
      return res.status(400).json({
        error: 'El nombre es obligatorio'
      });
    }

    if (!longitud) {
      return res.status(400).json({
        error: 'La longitud es obligatoria'
      });
    }

    const nuevoPerno = await PernoSostenimiento.create({
      nombre,
      longitud
    });

    res.status(201).json(nuevoPerno);

  } catch (error) {

    console.error('❌ Error createPernoSostenimiento:', error);

    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        error: 'Ya existe un perno con ese nombre'
      });
    }

    res.status(500).json({
      error: 'Error al crear el perno de sostenimiento'
    });

  }
};



// Actualizar
exports.updatePernoSostenimiento = async (req, res) => {
  try {

    const perno = await PernoSostenimiento.findByPk(req.params.id);

    if (!perno) {
      return res.status(404).json({
        error: 'Perno de sostenimiento no encontrado'
      });
    }

    const { nombre, longitud } = req.body;

    await perno.update({
      nombre: nombre ?? perno.nombre,
      longitud: longitud ?? perno.longitud
    });

    res.json(perno);

  } catch (error) {

    console.error('❌ Error updatePernoSostenimiento:', error);

    res.status(500).json({
      error: 'Error al actualizar el perno de sostenimiento'
    });

  }
};



// Eliminar
exports.deletePernoSostenimiento = async (req, res) => {
  try {

    const perno = await PernoSostenimiento.findByPk(req.params.id);

    if (!perno) {
      return res.status(404).json({
        error: 'Perno de sostenimiento no encontrado'
      });
    }

    await perno.destroy();

    res.json({
      message: 'Perno de sostenimiento eliminado correctamente'
    });

  } catch (error) {

    console.error('❌ Error deletePernoSostenimiento:', error);

    res.status(500).json({
      error: 'Error al eliminar el perno de sostenimiento'
    });

  }
};
