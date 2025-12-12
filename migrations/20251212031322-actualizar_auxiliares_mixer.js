'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // ==================== AuxiliaresMixer ====================
    await queryInterface.addColumn('auxiliares_mixer', 'codigo', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_mixer', 'empresa', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_mixer', 'estado', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'activo'
    });

    await queryInterface.addColumn('auxiliares_mixer', 'envio', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });

    // ==================== AuxiliaresInterMixer ====================
    await queryInterface.addColumn('auxiliares_inter_mixer', 'operador_estado', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_inter_mixer', 'operador_labor_origen', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_inter_mixer', 'operador_labor_destino', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_inter_mixer', 'guardia_estado', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_inter_mixer', 'guardia_labor_origen', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('auxiliares_inter_mixer', 'guardia_labor_destino', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    // ==================== AuxiliaresMixer ====================
    await queryInterface.removeColumn('auxiliares_mixer', 'codigo');
    await queryInterface.removeColumn('auxiliares_mixer', 'empresa');
    await queryInterface.removeColumn('auxiliares_mixer', 'estado');
    await queryInterface.removeColumn('auxiliares_mixer', 'envio');

    // ==================== AuxiliaresInterMixer ====================
    await queryInterface.removeColumn('auxiliares_inter_mixer', 'operador_estado');
    await queryInterface.removeColumn('auxiliares_inter_mixer', 'operador_labor_origen');
    await queryInterface.removeColumn('auxiliares_inter_mixer', 'operador_labor_destino');
    await queryInterface.removeColumn('auxiliares_inter_mixer', 'guardia_estado');
    await queryInterface.removeColumn('auxiliares_inter_mixer', 'guardia_labor_origen');
    await queryInterface.removeColumn('auxiliares_inter_mixer', 'guardia_labor_destino');
  }
};
