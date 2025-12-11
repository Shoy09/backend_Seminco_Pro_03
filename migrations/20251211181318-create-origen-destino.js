'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('origen_destino', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      operacion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_labor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      labor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ala: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('origen_destino');
  }
};
