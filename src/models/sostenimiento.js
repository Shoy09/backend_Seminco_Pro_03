const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize"); // 👈 usa la instancia real

const RegistroLabor = sequelize.define(
  "RegistroLabor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    fecha: DataTypes.DATEONLY,
    turno: DataTypes.STRING(20),
    guardia: DataTypes.STRING(10),
    nivel: DataTypes.STRING(50),
    block: DataTypes.STRING(20),
    roca: DataTypes.STRING(20),
    labor: DataTypes.STRING(50),
    empresa: DataTypes.STRING(100),

    op_robot_bolter_nombre: DataTypes.STRING(200),
    op_robot_bolter_numero: DataTypes.STRING(20),
    op_mixer_ayudante_nombre: DataTypes.STRING(200),
    op_mixer_ayudante_numero: DataTypes.STRING(20),
    op_mixer_nombre: DataTypes.STRING(200),
    op_mixer_numero: DataTypes.STRING(20),
    supervisor_nombre: DataTypes.STRING(200),
    supervisor_numero: DataTypes.STRING(20),

    condiciones_labor: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {},
    },

    ancho: DataTypes.DECIMAL(5, 2),
    alto: DataTypes.DECIMAL(5, 2),
    longitud: DataTypes.DECIMAL(5, 2),

    tipo_sostenimiento: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {},
    },

    calibradores_si_no: DataTypes.STRING(10),
    espesor: DataTypes.STRING(20),
    slump: DataTypes.STRING(50),
    presion: DataTypes.STRING(50),
    perno: DataTypes.STRING(50),
    long_perno: DataTypes.STRING(20),

    ejecutado_shotcrete1: DataTypes.DECIMAL(8, 2),
    ejecutado_malla1: DataTypes.DECIMAL(8, 2),
    ejecutado_pernos1: DataTypes.INTEGER,

    ejecutado_shotcrete2: DataTypes.DECIMAL(8, 2),
    ejecutado_malla2: DataTypes.DECIMAL(8, 2),
    ejecutado_pernos2: DataTypes.INTEGER,

    ejecutado_shotcrete3: DataTypes.DECIMAL(8, 2),
    ejecutado_malla3: DataTypes.DECIMAL(8, 2),
    ejecutado_pernos3: DataTypes.INTEGER,

    foto_croquis_path: DataTypes.TEXT,
    dibujo_croquis_path: DataTypes.TEXT,

    observaciones: DataTypes.TEXT,
    Operador: DataTypes.STRING(200),

    envio: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    Estado: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    // ===== FILTRO 1 =====
    filtro1_estado: {
      type: DataTypes.ENUM("pendiente", "aprobado", "rechazado"),
      defaultValue: "pendiente",
    },
    filtro1_usuario: DataTypes.STRING(150),
    filtro1_fecha: DataTypes.DATE,
    filtro1_observacion: DataTypes.TEXT,
    filtro1_cambios: DataTypes.JSON,

    // ===== FILTRO 2 =====
    filtro2_estado: {
      type: DataTypes.ENUM("pendiente", "aprobado", "rechazado"),
      defaultValue: "pendiente",
    },
    filtro2_usuario: DataTypes.STRING(150),
    filtro2_fecha: DataTypes.DATE,
    filtro2_observacion: DataTypes.TEXT,
    filtro2_cambios: DataTypes.JSON,

    // ===== FILTRO 3 =====
    filtro3_estado: {
      type: DataTypes.ENUM("pendiente", "aprobado", "rechazado"),
      defaultValue: "pendiente",
    },
    filtro3_usuario: DataTypes.STRING(150),
    filtro3_fecha: DataTypes.DATE,
    filtro3_observacion: DataTypes.TEXT,
    filtro3_cambios: DataTypes.JSON,
  },
  {
    tableName: "registro_labor",
    timestamps: true,
  }
);

module.exports = RegistroLabor; // 🔥 EXPORTACIÓN DIRECTA