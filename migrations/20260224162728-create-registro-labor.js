"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("registro_labor", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      fecha: Sequelize.DATEONLY,
      turno: Sequelize.STRING(20),
      guardia: Sequelize.STRING(10),
      nivel: Sequelize.STRING(50),
      block: Sequelize.STRING(20),
      roca: Sequelize.STRING(20),
      labor: Sequelize.STRING(50),
      empresa: Sequelize.STRING(100),

      op_robot_bolter_nombre: Sequelize.STRING(200),
      op_robot_bolter_numero: Sequelize.STRING(20),
      op_mixer_ayudante_nombre: Sequelize.STRING(200),
      op_mixer_ayudante_numero: Sequelize.STRING(20),
      op_mixer_nombre: Sequelize.STRING(200),
      op_mixer_numero: Sequelize.STRING(20),
      supervisor_nombre: Sequelize.STRING(200),
      supervisor_numero: Sequelize.STRING(20),

      condiciones_labor: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: {},
      },

      ancho: Sequelize.DECIMAL(5, 2),
      alto: Sequelize.DECIMAL(5, 2),
      longitud: Sequelize.DECIMAL(5, 2),

      tipo_sostenimiento: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: {},
      },

      calibradores_si_no: Sequelize.STRING(10),
      espesor: Sequelize.STRING(20),
      slump: Sequelize.STRING(50),
      presion: Sequelize.STRING(50),
      perno: Sequelize.STRING(50),
      long_perno: Sequelize.STRING(20),

      ejecutado_shotcrete1: Sequelize.DECIMAL(8, 2),
      ejecutado_malla1: Sequelize.DECIMAL(8, 2),
      ejecutado_pernos1: Sequelize.INTEGER,

      ejecutado_shotcrete2: Sequelize.DECIMAL(8, 2),
      ejecutado_malla2: Sequelize.DECIMAL(8, 2),
      ejecutado_pernos2: Sequelize.INTEGER,

      ejecutado_shotcrete3: Sequelize.DECIMAL(8, 2),
      ejecutado_malla3: Sequelize.DECIMAL(8, 2),
      ejecutado_pernos3: Sequelize.INTEGER,

      foto_croquis_path: Sequelize.TEXT,
      dibujo_croquis_path: Sequelize.TEXT,

      observaciones: Sequelize.TEXT,
      Operador: Sequelize.STRING(200),

      envio: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },

      Estado: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },

      // ================= FILTRO 1 =================
      filtro1_estado: {
        type: Sequelize.ENUM("pendiente", "aprobado", "rechazado"),
        defaultValue: "pendiente",
      },
      filtro1_usuario: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      filtro1_fecha: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      filtro1_observacion: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      filtro1_cambios: {
        type: Sequelize.JSON,
        allowNull: true,
      },

      // ================= FILTRO 2 =================
      filtro2_estado: {
        type: Sequelize.ENUM("pendiente", "aprobado", "rechazado"),
        defaultValue: "pendiente",
      },
      filtro2_usuario: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      filtro2_fecha: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      filtro2_observacion: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      filtro2_cambios: {
        type: Sequelize.JSON,
        allowNull: true,
      },

      // ================= FILTRO 3 =================
      filtro3_estado: {
        type: Sequelize.ENUM("pendiente", "aprobado", "rechazado"),
        defaultValue: "pendiente",
      },
      filtro3_usuario: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      filtro3_fecha: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      filtro3_observacion: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      filtro3_cambios: {
        type: Sequelize.JSON,
        allowNull: true,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("registro_labor");
  },
};