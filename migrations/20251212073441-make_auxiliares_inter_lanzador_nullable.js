'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // ----- CAMPOS OPERADOR -----
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_hora_inicial', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_hora_final', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_codigo', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_estado', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_nivel', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_labor', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_ubicacion', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_observacion', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_m3_lanzados', {
      type: Sequelize.FLOAT,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_labor_origen', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'operador_labor_destino', {
      type: Sequelize.STRING,
      allowNull: true
    });

    // ----- CAMPOS GUARDIA -----
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_hora_inicial', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_hora_final', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_codigo', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_estado', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_nivel', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_labor', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_ubicacion', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_observacion', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_m3_lanzados', {
      type: Sequelize.FLOAT,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_labor_origen', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_lanzador', 'guardia_labor_destino', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    // En caso de revertir, puedes volver a NOT NULL si quieres
  }
};
