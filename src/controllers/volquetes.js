const { Volquetes, InterVolquetes } = require("../models/Volquetes");
const { Op } = require("sequelize");

// ======================================================
// ======================= POST ==========================
// ======================================================
// Puede recibir 1 registro o un array de registros
exports.create = async (req, res) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const results = [];

        for (const padre of data) {
            const { detalles, ...padreData } = padre;

            // Crear padre
            const nuevoPadre = await Volquetes.create(padreData);

            // Crear hijos si vienen
            if (detalles && Array.isArray(detalles)) {
                for (const det of detalles) {
                    await InterVolquetes.create({
                        ...det,
                        volquetes_id: nuevoPadre.id
                    });
                }
            }

            results.push(nuevoPadre);
        }

        res.status(201).json({
            message: "Registros creados correctamente",
            data: results
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Ocurrió un error al crear registros"
        });
    }
};


// ======================================================
// ======================== GET ==========================
// ======================================================
exports.getAll = async (req, res) => {
    try {
        const data = await Volquetes.findAll({
            include: [
                {
                    model: InterVolquetes,
                    as: "detalles"
                }
            ],
            order: [["fecha", "DESC"]]
        });

        res.json(data);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error al obtener datos"
        });
    }
};


// ======================================================
// ======================== PUT ==========================
// ======================================================
// Actualizar 1 o varios registros
exports.update = async (req, res) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const results = [];

        for (const padre of data) {

            if (!padre.id) continue;

            const { detalles, ...padreData } = padre;

            // Actualizar padre
            await Volquetes.update(padreData, {
                where: { id: padre.id }
            });

            // Actualizar hijos si vienen
            if (detalles && Array.isArray(detalles)) {
                for (const det of detalles) {
                    if (det.id) {
                        await InterVolquetes.update(det, {
                            where: { id: det.id }
                        });
                    }
                }
            }

            results.push(padre);
        }

        res.json({
            message: "Registros actualizados correctamente",
            data: results
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error al actualizar registros"
        });
    }
};


// ======================================================
// ======================= DELETE =========================
// ======================================================
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        await Volquetes.destroy({
            where: { id }
        });

        // Hijos se eliminan por ON DELETE CASCADE
        res.json({
            message: "Registro eliminado correctamente"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error al eliminar registro"
        });
    }
};


// ======================================================
// ======= GET por jefe_guardia sin firma =================
// ======================================================
exports.getPendientesFirmaJefe = async (req, res) => {
    try {
        const { jefe_guardia } = req.query;

        if (!jefe_guardia) {
            return res.status(400).json({
                error: "Debe enviar el jefe_guardia"
            });
        }

        const data = await Volquetes.findAll({
            where: {
                jefe_guardia: jefe_guardia,
                [Op.or]: [
                    { firma_jefe_guardia: null },
                    { firma_jefe_guardia: "" }
                ]
            },
            include: [
                {
                    model: InterVolquetes,
                    as: "detalles"
                }
            ],
            order: [["fecha", "DESC"]]
        });

        res.json(data);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error al obtener registros pendientes de firma"
        });
    }
};
