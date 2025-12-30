const { AuxiliaresMixer, AuxiliaresInterMixer } = require('../models/auxiliares_mixer');
const { Op } = require('sequelize');


// ==================================================
// ===============  GET GENERAL  ====================
// ==================================================
exports.getAll = async (req, res) => {
    try {
        const data = await AuxiliaresMixer.findAll({
            include: [
                {
                    model: AuxiliaresInterMixer,
                    as: 'detalles'
                }
            ],
            order: [['id', 'DESC']]
        });

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los datos' });
    }
};



// ==================================================
// ===================  POST  ========================
// Puede recibir:
// 1) Un solo registro
// 2) Un array con varios registros
// ==================================================
exports.create = async (req, res) => {
    try {

        let payload = req.body;

        // Si viene solo un registro, lo convertimos en array para tratar igual
        if (!Array.isArray(payload)) {
            payload = [payload];
        }

        const results = [];

        for (const item of payload) {

            // Crear padre
            const padre = await AuxiliaresMixer.create(item);

            // Crear hijos si existen
            if (item.detalles && Array.isArray(item.detalles)) {
                for (const detalle of item.detalles) {
                    await AuxiliaresInterMixer.create({
                        ...detalle,
                        padre_id: padre.id
                    });
                }
            }

            results.push(padre);
        }

        res.json({
            message: "Registros creados correctamente",
            data: results
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear los registros" });
    }
};




// ==================================================
// ===================  PUT  =========================
// Puede recibir:
// 1) Un solo registro
// 2) Un array con varios registros
// ==================================================
exports.update = async (req, res) => {
    try {
        let payload = req.body;

        if (!Array.isArray(payload)) {
            payload = [payload];
        }

        const results = [];

        for (const item of payload) {

            const { id, detalles, ...fieldsPadre } = item;

            // Actualizar padre
            await AuxiliaresMixer.update(fieldsPadre, {
                where: { id }
            });

            // Eliminar hijos actuales
            await AuxiliaresInterMixer.destroy({
                where: { padre_id: id }
            });

            // Insertar hijos nuevos
            if (Array.isArray(detalles)) {
                for (const det of detalles) {
                    await AuxiliaresInterMixer.create({
                        ...det,
                        padre_id: id
                    });
                }
            }

            results.push(item);
        }

        res.json({
            message: "Registros actualizados correctamente",
            data: results
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar los registros" });
    }
};




// ==================================================
// ===================  DELETE =======================
// Se elimina el padre y automáticamente sus hijos
// gracias al CASCADE de la migración
// ==================================================
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        await AuxiliaresMixer.destroy({
            where: { id }
        });

        res.json({ message: "Registro eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el registro" });
    }
};


exports.getPendientesFirmaJefeMixer = async (req, res) => {
  try {
    const { jefe_guardia } = req.query;

    if (!jefe_guardia) {
      return res.status(400).json({
        error: "Debe enviar el jefe_guardia"
      });
    }

    const data = await AuxiliaresMixer.findAll({
      where: {
        jefe_guardia: jefe_guardia,
        [Op.or]: [
          { firma_jefe_guardia: null },
          { firma_jefe_guardia: "" }
        ]
      },
      include: [
        {
          model: AuxiliaresInterMixer,
          as: 'detalles'
        }
      ],
      order: [['fecha', 'DESC']]
    });

    res.json(data);

  } catch (error) {
    console.error('Error getPendientesFirmaJefeMixer:', error);
    res.status(500).json({
      error: "Error al obtener registros pendientes de firma (Mixer)"
    });
  }
};

// ======================================================
// ========== UPDATE PADRE + HIJOS POR PADRE_ID =========
// ======================================================
// Recibe uno o varios registros
exports.updateByPadreIt = async (req, res) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const results = [];

        for (const padre of data) {

            // 🔴 obligatorio
            if (!padre.id) continue;

            const { detalles, ...padreData } = padre;

            // ======================================================
            // ================= ACTUALIZAR PADRE ==================
            // ======================================================
            await AuxiliaresMixer.update(padreData, {
                where: { id: padre.id }
            });

            // ======================================================
            // ================= ACTUALIZAR HIJOS ==================
            // ======================================================
            if (detalles && Array.isArray(detalles)) {

                for (const det of detalles) {

                    // 🔴 it es obligatorio
                    if (!det.it) continue;

                    // 🔹 1. VERIFICAR SI EL HIJO EXISTE
                    const existe = await AuxiliaresInterMixer.findOne({
                        where: {
                            padre_id: padre.id,
                            it: det.it
                        }
                    });

                    if (existe) {
                        // 🔹 2. SI EXISTE → ACTUALIZAR
                        await AuxiliaresInterMixer.update(
                            det,
                            {
                                where: {
                                    padre_id: padre.id,
                                    it: det.it
                                }
                            }
                        );
                    } else {
                        // 🔹 3. SI NO EXISTE → CREAR
                        await AuxiliaresInterMixer.create({
                            ...det,
                            padre_id: padre.id
                        });
                    }
                }
            }

            results.push({
                id: padre.id,
                actualizado: true
            });
        }

        res.json({
            message: "Padre e hijos actualizados correctamente",
            data: results
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error al actualizar registros por padre + it"
        });
    }
};
