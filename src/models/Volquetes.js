const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// ======================================================
// ======================= PADRE =========================
// ======================= VOLQUETES =====================
// ======================================================

const Volquetes = sequelize.define('Volquetes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    horometro_inicia: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    horometro_final: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    kilometraje_inicia: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    kilometraje_final: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    operador: {
        type: DataTypes.STRING,
        allowNull: false
    },
    turno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jefe_guardia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    equipo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    codigo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    empresa: {
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
    },

    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'activo'
    },

    envio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }

}, {
    tableName: 'volquetes',
    timestamps: false
});


// ======================================================
// ======================== HIJO =========================
// ==================== INTER_VOLQUETES =================
// ======================================================

const InterVolquetes = sequelize.define('InterVolquetes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    volquetes_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    it: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

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
    operador_estado: {
        type: DataTypes.STRING,
        allowNull: true
    },

    horometro_inicia: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    horometro_final: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },

    operador_nivel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    operador_zona: {
        type: DataTypes.STRING,
        allowNull: true
    },
    operador_labor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    operador_hora_llegada: {
        type: DataTypes.STRING,
        allowNull: true
    },

    operador_hora_carguio_inicio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    operador_hora_carguio_final: {
        type: DataTypes.STRING,
        allowNull: true
    },
    operador_destino: {
        type: DataTypes.STRING,
        allowNull: true
    },
    operador_hora_descarga: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    tableName: 'inter_volquetes',
    timestamps: false
});


// ======================================================
// ===============   RELACIÓN PADRE → HIJO   ============
// ======================================================

Volquetes.hasMany(InterVolquetes, {
    foreignKey: 'volquetes_id',
    as: 'detalles',
    onDelete: 'CASCADE'
});

InterVolquetes.belongsTo(Volquetes, {
    foreignKey: 'volquetes_id',
    as: 'volquete'
});


// ======================================================
// ======================= EXPORT ========================
// ======================================================

module.exports = {
    Volquetes,
    InterVolquetes
};
