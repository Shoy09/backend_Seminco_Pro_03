'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // ==================== AuxiliaresLanzador ====================
    await queryInterface.addColumn('auxiliares_lanzador', 'codigo', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_lanzador', 'empresa', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_lanzador', 'estado', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'activo'
    });

    await queryInterface.addColumn('auxiliares_lanzador', 'envio', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });

    // ==================== AuxiliaresInterLanzador ====================
    await queryInterface.addColumn('auxiliares_inter_lanzador', 'operador_estado', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_inter_lanzador', 'operador_labor_origen', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_inter_lanzador', 'operador_labor_destino', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_inter_lanzador', 'guardia_estado', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_inter_lanzador', 'guardia_labor_origen', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_inter_lanzador', 'guardia_labor_destino', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    // ==================== AuxiliaresLanzador ====================
    await queryInterface.removeColumn('auxiliares_lanzador', 'codigo');
    await queryInterface.removeColumn('auxiliares_lanzador', 'empresa');
    await queryInterface.removeColumn('auxiliares_lanzador', 'estado');
    await queryInterface.removeColumn('auxiliares_lanzador', 'envio');

    // ==================== AuxiliaresInterLanzador ====================
    await queryInterface.removeColumn('auxiliares_inter_lanzador', 'operador_estado');
    await queryInterface.removeColumn('auxiliares_inter_lanzador', 'operador_labor_origen');
    await queryInterface.removeColumn('auxiliares_inter_lanzador', 'operador_labor_destino');
    await queryInterface.removeColumn('auxiliares_inter_lanzador', 'guardia_estado');
    await queryInterface.removeColumn('auxiliares_inter_lanzador', 'guardia_labor_origen');
    await queryInterface.removeColumn('auxiliares_inter_lanzador', 'guardia_labor_destino');
  }
};
