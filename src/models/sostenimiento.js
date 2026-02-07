const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const RegistroLabor = sequelize.define(
    "RegistroLabor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      // ============ DATOS GENERALES ============
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      turno: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      guardia: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      nivel: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      block: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      roca: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      labor: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empresa: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },

      // ============ PERSONAL ============
      op_robot_bolter_nombre: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      op_robot_bolter_numero: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      op_mixer_ayudante_nombre: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      op_mixer_ayudante_numero: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      op_mixer_nombre: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      op_mixer_numero: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      supervisor_nombre: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      supervisor_numero: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },

      // ============ CONDICIONES DE LABOR ============
      condiciones_labor: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: {},
      },

      // ============ MEDIDAS ============
      ancho: DataTypes.DECIMAL(5, 2),
      alto: DataTypes.DECIMAL(5, 2),
      longitud: DataTypes.DECIMAL(5, 2),

      // ============ TIPO DE SOSTENIMIENTO ============
      
      tipo_sostenimiento: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: {},
      },

      // ============ CALIBRADORES / PERNO ============
      calibradores_si_no: DataTypes.STRING(10),
      espesor: DataTypes.STRING(20),
      slump: DataTypes.STRING(50),
      presion: DataTypes.STRING(50),
      perno: DataTypes.STRING(50),
      long_perno: DataTypes.STRING(20),

      // ============ SOSTENIMIENTO EJECUTADO ============
      ejecutado_shotcrete1: DataTypes.DECIMAL(8, 2),
      ejecutado_malla1: DataTypes.DECIMAL(8, 2),
      ejecutado_pernos1: DataTypes.INTEGER,

      ejecutado_shotcrete2: DataTypes.DECIMAL(8, 2),
      ejecutado_malla2: DataTypes.DECIMAL(8, 2),
      ejecutado_pernos2: DataTypes.INTEGER,

      ejecutado_shotcrete3: DataTypes.DECIMAL(8, 2),
      ejecutado_malla3: DataTypes.DECIMAL(8, 2),
      ejecutado_pernos3: DataTypes.INTEGER,

      // ============ CROQUIS ============
      foto_croquis_path: DataTypes.TEXT,
      dibujo_croquis_path: DataTypes.TEXT,
    },
    {
      tableName: "registro_labor",
      timestamps: true,
    },
  );

  return RegistroLabor;
};
