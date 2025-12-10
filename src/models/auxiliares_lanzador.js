const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// ======================================================
// ===================== PADRE ==========================
// ======================================================

const AuxiliaresLanzador = sequelize.define("AuxiliaresLanzador", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    horometro_diesel_inicia: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    horometro_diesel_final: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    operador: {
        type: DataTypes.STRING,
        allowNull: true
    },

    turno: {
        type: DataTypes.STRING,
        allowNull: true
    },

    jefe_guardia: {
        type: DataTypes.STRING,
        allowNull: true
    },

    equipo: {
        type: DataTypes.STRING,
        allowNull: true
    },

    firma_operador: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    firma_jefe_guardia: {
        type: DataTypes.TEXT,
        allowNull: true
    }

}, {
    tableName: "auxiliares_lanzador",
    timestamps: false
});



// ======================================================
// ====================== HIJO ===========================
// ======================================================
// Prefijos pedidos:
// operador_*
// guardia_*

const AuxiliaresInterLanzador = sequelize.define("AuxiliaresInterLanzador", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    padre_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    it: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    // ===================== OPERADOR =====================
    operador_hora_inicial: {
        type: DataTypes.STRING,
        allowNull: true
    },

    operador_hora_final: {
        type: DataTypes.STRING,
        allowNull: true
    },

    operador_codigo: {
        type: DataTypes.STRING,
        allowNull: true
    },

    operador_nivel: {
        type: DataTypes.STRING,
        allowNull: true
    },

    operador_labor: {
        type: DataTypes.STRING,
        allowNull: true
    },

    operador_ubicacion: {
        type: DataTypes.STRING,
        allowNull: true
    },

    operador_observacion: {
        type: DataTypes.STRING,
        allowNull: true
    },

    operador_m3_lanzados: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    // ===================== GUARDIA ======================
    guardia_hora_inicial: {
        type: DataTypes.STRING,
        allowNull: true
    },

    guardia_hora_final: {
        type: DataTypes.STRING,
        allowNull: true
    },

    guardia_codigo: {
        type: DataTypes.STRING,
        allowNull: true
    },

    guardia_nivel: {
        type: DataTypes.STRING,
        allowNull: true
    },

    guardia_labor: {
        type: DataTypes.STRING,
        allowNull: true
    },

    guardia_ubicacion: {
        type: DataTypes.STRING,
        allowNull: true
    },

    guardia_observacion: {
        type: DataTypes.STRING,
        allowNull: true
    },

    guardia_m3_lanzados: {
        type: DataTypes.FLOAT,
        allowNull: true
    }

}, {
    tableName: "auxiliares_inter_lanzador",
    timestamps: false
});



// ======================================================
// ===============   RELACIÓN PADRE → HIJO   ============
// ======================================================

AuxiliaresLanzador.hasMany(AuxiliaresInterLanzador, {
    foreignKey: "padre_id",
    as: "detalles",
    onDelete: "CASCADE"
});

AuxiliaresInterLanzador.belongsTo(AuxiliaresLanzador, {
    foreignKey: "padre_id",
    as: "padre"
});



module.exports = {
    AuxiliaresLanzador,
    AuxiliaresInterLanzador
};
