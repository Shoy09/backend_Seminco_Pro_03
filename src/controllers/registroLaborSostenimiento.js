const RegistroLabor = require("../models/sostenimiento");
const uploadSostenimiento = require('../config/uploadSostenimiento');
const { Op } = require("sequelize");
const cloudinary = require('../config/cloudinary');

// ======================================================
// ======================= CREATE ========================
// ======================================================
exports.create = [
  uploadSostenimiento.fields([
    { name: 'foto_croquis', maxCount: 1 },
    { name: 'dibujo_croquis', maxCount: 1 }
  ]),
  async (req, res) => {

    const transaction = await RegistroLabor.sequelize.transaction();

    let fotoPublicId = null;
    let dibujoPublicId = null;

    try {

      // 🔹 Archivos subidos
      if (req.files?.foto_croquis) {
        fotoPublicId = req.files.foto_croquis[0].filename;
      }

      if (req.files?.dibujo_croquis) {
        dibujoPublicId = req.files.dibujo_croquis[0].filename;
      }

      // 🔹 Extraer campos
      const {
        fecha,
        turno,
        guardia,
        nivel,
        block,
        roca,
        labor,
        empresa,
        op_robot_bolter_nombre,
        op_robot_bolter_numero,
        op_mixer_ayudante_nombre,
        op_mixer_ayudante_numero,
        op_mixer_nombre,
        op_mixer_numero,
        supervisor_nombre,
        supervisor_numero,
        condiciones_labor,
        ancho,
        alto,
        longitud,
        tipo_sostenimiento,
        calibradores_si_no,
        espesor,
        slump,
        presion,
        perno,
        long_perno,
        ejecutado_shotcrete1,
        ejecutado_malla1,
        ejecutado_pernos1,
        ejecutado_shotcrete2,
        ejecutado_malla2,
        ejecutado_pernos2,
        ejecutado_shotcrete3,
        ejecutado_malla3,
        ejecutado_pernos3,
        observaciones,
        Operador,
        envio,
        Estado,
      } = req.body;

      // 🔥 VALIDACIÓN MÍNIMA (evita registros vacíos)
      if (!fecha || !turno || !labor || !supervisor_nombre) {

        // limpiar imágenes si ya se subieron
        if (fotoPublicId) {
          await cloudinary.uploader.destroy(fotoPublicId);
        }
        if (dibujoPublicId) {
          await cloudinary.uploader.destroy(dibujoPublicId);
        }

        return res.status(400).json({
          error: "Faltan campos obligatorios"
        });
      }

      // 🔹 Crear registro dentro de transacción
      const nuevoRegistro = await RegistroLabor.create({

        fecha,
        turno,
        guardia,
        nivel,
        block,
        roca,
        labor,
        empresa,

        op_robot_bolter_nombre,
        op_robot_bolter_numero,
        op_mixer_ayudante_nombre,
        op_mixer_ayudante_numero,
        op_mixer_nombre,
        op_mixer_numero,
        supervisor_nombre,
        supervisor_numero,

        condiciones_labor,
        ancho,
        alto,
        longitud,
        tipo_sostenimiento,

        calibradores_si_no,
        espesor,
        slump,
        presion,
        perno,
        long_perno,

        ejecutado_shotcrete1,
        ejecutado_malla1,
        ejecutado_pernos1,

        ejecutado_shotcrete2,
        ejecutado_malla2,
        ejecutado_pernos2,

        ejecutado_shotcrete3,
        ejecutado_malla3,
        ejecutado_pernos3,

        foto_croquis_path: req.files?.foto_croquis
          ? req.files.foto_croquis[0].path
          : null,

        dibujo_croquis_path: req.files?.dibujo_croquis
          ? req.files.dibujo_croquis[0].path
          : null,

        observaciones,
        Operador,
        envio,
        Estado,

      }, { transaction });

      await transaction.commit();

      return res.status(201).json({
        message: "Registro creado correctamente",
        data: nuevoRegistro
      });

    } catch (error) {

      await transaction.rollback();

      // 🔥 LIMPIEZA AUTOMÁTICA SI FALLA TODO
      if (fotoPublicId) {
        await cloudinary.uploader.destroy(fotoPublicId);
      }

      if (dibujoPublicId) {
        await cloudinary.uploader.destroy(dibujoPublicId);
      }

      console.error("Error al crear registro:", error);

      return res.status(500).json({
        error: "Error al crear registro"
      });
    }
  }
];

exports.getAll = async (req, res) => {
  try {
    const data = await RegistroLabor.findAll({
      order: [["fecha", "DESC"]],
    });

    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al obtener registros",
    });
  }
};

exports.updateFiltro1 = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado, usuario, observacion, cambios } = req.body;

    await RegistroLabor.update(
      {
        filtro1_estado: estado,
        filtro1_usuario: usuario,
        filtro1_fecha: new Date(),
        filtro1_observacion: observacion,
        filtro1_cambios: cambios || null,
      },
      { where: { id } }
    );

    res.json({
      message: "Filtro 1 actualizado correctamente",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al actualizar filtro 1",
    });
  }
};

exports.updateFiltro2 = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado, usuario, observacion, cambios } = req.body;

    const registro = await RegistroLabor.findByPk(id);

    if (!registro) {
      return res.status(404).json({ error: "Registro no encontrado" });
    }

    if (registro.filtro1_estado !== "aprobado") {
      return res.status(400).json({
        error: "No se puede aprobar filtro 2 sin aprobar filtro 1",
      });
    }

    await RegistroLabor.update(
      {
        filtro2_estado: estado,
        filtro2_usuario: usuario,
        filtro2_fecha: new Date(),
        filtro2_observacion: observacion,
        filtro2_cambios: cambios || null,
      },
      { where: { id } }
    );

    res.json({
      message: "Filtro 2 actualizado correctamente",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al actualizar filtro 2",
    });
  }
};

exports.updateFiltro3 = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado, usuario, observacion, cambios } = req.body;

    const registro = await RegistroLabor.findByPk(id);

    if (!registro) {
      return res.status(404).json({ error: "Registro no encontrado" });
    }

    if (registro.filtro2_estado !== "aprobado") {
      return res.status(400).json({
        error: "No se puede aprobar filtro 3 sin aprobar filtro 2",
      });
    }

    await RegistroLabor.update(
      {
        filtro3_estado: estado,
        filtro3_usuario: usuario,
        filtro3_fecha: new Date(),
        filtro3_observacion: observacion,
        filtro3_cambios: cambios || null,
      },
      { where: { id } }
    );

    res.json({
      message: "Filtro 3 actualizado correctamente",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al actualizar filtro 3",
    });
  }
};

//GET POR ETAPA Y FILTRO

exports.getPorEtapa = async (req, res) => {
  try {

    const { etapa } = req.params;

    let whereCondition = {};

    if (etapa == 1) {
      whereCondition = { filtro1_estado: "pendiente" };
    }

    if (etapa == 2) {
      whereCondition = {
        filtro1_estado: "aprobado",
        filtro2_estado: "pendiente",
      };
    }

    if (etapa == 3) {
      whereCondition = {
        filtro1_estado: "aprobado",
        filtro2_estado: "aprobado",
        filtro3_estado: "pendiente",
      };
    }

    const data = await RegistroLabor.findAll({
      where: whereCondition,
      order: [["fecha", "DESC"]],
    });

    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al obtener registros por etapa",
    });
  }
};