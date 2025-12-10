'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    ///////////////////////////////////////////////////////////
    //                TABLA PADRE: auxiliares_mixer
    ///////////////////////////////////////////////////////////
    await queryInterface.createTable('auxiliares_mixer', {

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
        allowNull: false
      },

      horometro_diesel_final: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      operador: {
        type: Sequelize.STRING,
        allowNull: false
      },

      turno: {
        type: Sequelize.STRING,
        allowNull: false
      },

      jefe_guardia: {
        type: Sequelize.STRING,
        allowNull: false
      },

      equipo: {
        type: Sequelize.STRING,
        allowNull: false
      },

      // NUEVOS CAMPOS
      firma_operador: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      firma_jefe_guardia: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    });



    ///////////////////////////////////////////////////////////
    //             TABLA HIJA: auxiliares_inter_mixer
    ///////////////////////////////////////////////////////////
    await queryInterface.createTable('auxiliares_inter_mixer', {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      padre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'auxiliares_mixer',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },

      it: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      // -------- OPERADOR --------
      operador_hora_inicial: {
        type: Sequelize.TIME,
        allowNull: false
      },

      operador_hora_final: {
        type: Sequelize.TIME,
        allowNull: false
      },

      operador_codigo: {
        type: Sequelize.STRING,
        allowNull: false
      },

      operador_nivel: {
        type: Sequelize.STRING,
        allowNull: false
      },

      operador_labor: {
        type: Sequelize.STRING,
        allowNull: false
      },

      operador_ubicacion: {
        type: Sequelize.STRING,
        allowNull: false
      },

      operador_observacion: {
        type: Sequelize.STRING,
        allowNull: true
      },

      operador_m3_lanzados: {
        type: Sequelize.FLOAT,
        allowNull: true
      },

      // -------- GUARDIA (DUPLICADOS) --------
      guardia_hora_inicial: {
        type: Sequelize.TIME,
        allowNull: true
      },

      guardia_hora_final: {
        type: Sequelize.TIME,
        allowNull: true
      },

      guardia_codigo: {
        type: Sequelize.STRING,
        allowNull: true
      },

      guardia_nivel: {
        type: Sequelize.STRING,
        allowNull: true
      },

      guardia_labor: {
        type: Sequelize.STRING,
        allowNull: true
      },

      guardia_ubicacion: {
        type: Sequelize.STRING,
        allowNull: true
      },

      guardia_observacion: {
        type: Sequelize.STRING,
        allowNull: true
      },

      guardia_m3_lanzados: {
        type: Sequelize.FLOAT,
        allowNull: true
      }
    });
  },



  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('auxiliares_inter_mixer');
    await queryInterface.dropTable('auxiliares_mixer');
  }
};
