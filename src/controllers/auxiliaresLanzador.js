const { AuxiliaresLanzador, AuxiliaresInterLanzador } = require("../models/auxiliares_lanzador");
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
            const nuevoPadre = await AuxiliaresLanzador.create(padreData);

            // Si viene detalle hijo
            if (detalles && Array.isArray(detalles)) {
                for (const det of detalles) {
                    await AuxiliaresInterLanzador.create({
                        ...det,
                        padre_id: nuevoPadre.id
                    });
                }
            }

            results.push(nuevoPadre);
        }

        res.status(201).json({ message: "Registros creados", data: results });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error al crear registros" });
    }
};

// ======================================================
// ======================== GET ===========================
// ======================================================
exports.getAll = async (req, res) => {
    try {
        const data = await AuxiliaresLanzador.findAll({
            include: [
                {
                    model: AuxiliaresInterLanzador,
                    as: "detalles"
                }
            ]
        });

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener datos" });
    }
};

// ======================================================
// ======================== PUT ===========================
// ======================================================
// Actualizar 1 o varios registros
exports.update = async (req, res) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const results = [];

        for (const padre of data) {

            if (!padre.id) continue;

            const { detalles, ...padreData } = padre;

            // actualizar el padre
            await AuxiliaresLanzador.update(padreData, {
                where: { id: padre.id }
            });

            // actualizar hijos si vienen
            if (detalles && Array.isArray(detalles)) {
                for (const det of detalles) {
                    if (det.id) {
                        await AuxiliaresInterLanzador.update(det, {
                            where: { id: det.id }
                        });
                    }
                }
            }

            results.push(padre);
        }

        res.json({ message: "Registros actualizados", data: results });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar registros" });
    }
};

// ======================================================
// ======================= DELETE =========================
// ======================================================
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        await AuxiliaresLanzador.destroy({
            where: { id }
        });

        // Hijos se eliminan gracias a ON DELETE CASCADE

        res.json({ message: "Registro padre e hijos eliminados correctamente" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar registro" });
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

        const data = await AuxiliaresLanzador.findAll({
            where: {
                jefe_guardia: jefe_guardia,
                [Op.or]: [
                    { firma_jefe_guardia: null },
                    { firma_jefe_guardia: "" }
                ]
            },
            include: [
                {
                    model: AuxiliaresInterLanzador,
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
            await AuxiliaresLanzador.update(padreData, {
                where: { id: padre.id }
            });

            // ======================================================
            // ================= ACTUALIZAR HIJOS ==================
            // ======================================================
            if (detalles && Array.isArray(detalles)) {

                for (const det of detalles) {

                    // it es obligatorio
                    if (!det.it) continue;

                    const [updated] = await AuxiliaresInterLanzador.update(
                        det,
                        {
                            where: {
                                padre_id: padre.id,
                                it: det.it
                            }
                        }
                    );

                    // 🟡 OPCIONAL: si no existe, crear
                    if (updated === 0) {
                        await AuxiliaresInterLanzador.create({
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
