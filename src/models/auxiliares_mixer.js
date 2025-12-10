const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

/////////////////////////////////////////////////////
//                MODELO PADRE
/////////////////////////////////////////////////////

const AuxiliaresMixer = sequelize.define('AuxiliaresMixer', {
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
        allowNull: false
    },

    horometro_diesel_final: {
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
    firma_operador: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    firma_jefe_guardia: {
        type: DataTypes.TEXT,
        allowNull: true
    }

}, {
    tableName: 'auxiliares_mixer',
    timestamps: false
});



/////////////////////////////////////////////////////
//                MODELO HIJO
/////////////////////////////////////////////////////

const AuxiliaresInterMixer = sequelize.define('AuxiliaresInterMixer', {
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

    // ----- CAMPOS OPERADOR -----
    operador_hora_inicial: {
        type: DataTypes.TIME,
        allowNull: false
    },

    operador_hora_final: {
        type: DataTypes.TIME,
        allowNull: false
    },

    operador_codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    operador_nivel: {
        type: DataTypes.STRING,
        allowNull: false
    },

    operador_labor: {
        type: DataTypes.STRING,
        allowNull: false
    },

    operador_ubicacion: {
        type: DataTypes.STRING,
        allowNull: false
    },

    operador_observacion: {
        type: DataTypes.STRING,
        allowNull: true
    },

    operador_m3_lanzados: {
        type: DataTypes.FLOAT,
        allowNull: true
    },


    // ====== COPIA DE CAMPOS PERO CON PREFIJO "guardia_" ======

    guardia_hora_inicial: {
        type: DataTypes.TIME,
        allowNull: true
    },

    guardia_hora_final: {
        type: DataTypes.TIME,
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
    tableName: 'auxiliares_inter_mixer',
    timestamps: false
});



/////////////////////////////////////////////////////
//                RELACIÓN PADRE → HIJOS
/////////////////////////////////////////////////////

AuxiliaresMixer.hasMany(AuxiliaresInterMixer, {
    foreignKey: 'padre_id',
    as: 'detalles'
});

AuxiliaresInterMixer.belongsTo(AuxiliaresMixer, {
    foreignKey: 'padre_id',
    as: 'padre'
});


/////////////////////////////////////////////////////
//                EXPORTACIÓN
/////////////////////////////////////////////////////

module.exports = {
    AuxiliaresMixer,
    AuxiliaresInterMixer
};
