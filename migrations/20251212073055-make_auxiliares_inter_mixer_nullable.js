'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // ----- CAMPOS OPERADOR -----
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_hora_inicial', {
      type: Sequelize.TIME,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_hora_final', {
      type: Sequelize.TIME,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_codigo', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_estado', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_nivel', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_labor', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_ubicacion', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_observacion', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_m3_lanzados', {
      type: Sequelize.FLOAT,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_labor_origen', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'operador_labor_destino', {
      type: Sequelize.STRING,
      allowNull: true
    });

    // ----- CAMPOS GUARDIA -----
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_hora_inicial', {
      type: Sequelize.TIME,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_hora_final', {
      type: Sequelize.TIME,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_codigo', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_estado', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_nivel', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_labor', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_ubicacion', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_observacion', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_m3_lanzados', {
      type: Sequelize.FLOAT,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_labor_origen', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('auxiliares_inter_mixer', 'guardia_labor_destino', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    // Si quieres revertir, puedes poner allowNull: false
    // pero depende de tu caso
  }
};
