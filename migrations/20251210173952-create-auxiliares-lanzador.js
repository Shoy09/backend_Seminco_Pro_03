'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // ======================================================
    // ===================== TABLA PADRE ====================
    // ======================================================

    await queryInterface.createTable('auxiliares_lanzador', {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },

      horometro_diesel_inicia: {
        type: Sequelize.FLOAT,
        allowNull: true
      },

      horometro_diesel_final: {
        type: Sequelize.FLOAT,
        allowNull: true
      },

      operador: {
        type: Sequelize.STRING,
        allowNull: true
      },

      turno: {
        type: Sequelize.STRING,
        allowNull: true
      },

      jefe_guardia: {
        type: Sequelize.STRING,
        allowNull: true
      },

      equipo: {
        type: Sequelize.STRING,
        allowNull: true
      },

      firma_operador: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      firma_jefe_guardia: {
        type: Sequelize.TEXT,
        allowNull: true
      }

    });

    // ======================================================
    // ====================== TABLA HIJO =====================
    // ======================================================

    await queryInterface.createTable('auxiliares_inter_lanzador', {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      padre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'auxiliares_lanzador',
          key: 'id'
        },
        onDelete: 'CASCADE',   // elimina hijos si el padre se elimina
        onUpdate: 'CASCADE'
      },

      it: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      // ===================== OPERADOR =====================

      operador_hora_inicial: { type: Sequelize.STRING },
      operador_hora_final: { type: Sequelize.STRING },
      operador_codigo: { type: Sequelize.STRING },
      operador_nivel: { type: Sequelize.STRING },
      operador_labor: { type: Sequelize.STRING },
      operador_ubicacion: { type: Sequelize.STRING },
      operador_observacion: { type: Sequelize.STRING },
      operador_m3_lanzados: { type: Sequelize.FLOAT },

      // ===================== GUARDIA ======================

      guardia_hora_inicial: { type: Sequelize.STRING },
      guardia_hora_final: { type: Sequelize.STRING },
      guardia_codigo: { type: Sequelize.STRING },
      guardia_nivel: { type: Sequelize.STRING },
      guardia_labor: { type: Sequelize.STRING },
      guardia_ubicacion: { type: Sequelize.STRING },
      guardia_observacion: { type: Sequelize.STRING },
      guardia_m3_lanzados: { type: Sequelize.FLOAT },

    });

  },

  async down(queryInterface) {

    await queryInterface.dropTable('auxiliares_inter_lanzador');
    await queryInterface.dropTable('auxiliares_lanzador');

  }
};
