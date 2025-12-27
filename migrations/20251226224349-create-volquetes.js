'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // ======================================================
    // ======================= PADRE =========================
    // ======================= VOLQUETES =====================
    // ======================================================
    await queryInterface.createTable('volquetes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },

      horometro_inicia: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      horometro_final: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      kilometraje_inicia: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      kilometraje_final: {
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

      codigo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      empresa: {
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
      },

      estado: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'activo'
      },

      envio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    });


    // ======================================================
    // ======================== HIJO =========================
    // ==================== INTER_VOLQUETES =================
    // ======================================================
    await queryInterface.createTable('inter_volquetes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      volquetes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'volquetes',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },

      it: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      operador_hora_inicial: {
        type: Sequelize.STRING,
        allowNull: true
      },
      operador_hora_final: {
        type: Sequelize.STRING,
        allowNull: true
      },
      operador_codigo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      operador_estado: {
        type: Sequelize.STRING,
        allowNull: true
      },

      horometro_inicia: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      horometro_final: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },

      operador_nivel: {
        type: Sequelize.STRING,
        allowNull: true
      },
      operador_zona: {
        type: Sequelize.STRING,
        allowNull: true
      },
      operador_labor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      operador_hora_llegada: {
        type: Sequelize.STRING,
        allowNull: true
      },

      operador_hora_carguio_inicio: {
        type: Sequelize.STRING,
        allowNull: true
      },
      operador_hora_carguio_final: {
        type: Sequelize.STRING,
        allowNull: true
      },
      operador_destino: {
        type: Sequelize.STRING,
        allowNull: true
      },
      operador_hora_descarga: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    // Orden inverso por la FK
    await queryInterface.dropTable('inter_volquetes');
    await queryInterface.dropTable('volquetes');
  }
};
