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
    fecha: { type: DataTypes.DATEONLY, allowNull: false },
    horometro_diesel_inicia: { type: DataTypes.FLOAT, allowNull: false },
    horometro_diesel_final: { type: DataTypes.FLOAT, allowNull: false },
    operador: { type: DataTypes.STRING, allowNull: false },
    turno: { type: DataTypes.STRING, allowNull: false },
    jefe_guardia: { type: DataTypes.STRING, allowNull: false },
    equipo: { type: DataTypes.STRING, allowNull: false },
    codigo: { type: DataTypes.STRING, allowNull: true },          // nuevo
    empresa: { type: DataTypes.STRING, allowNull: true },         // nuevo
    firma_operador: { type: DataTypes.TEXT, allowNull: true },
    firma_jefe_guardia: { type: DataTypes.TEXT, allowNull: true },
    estado: { type: DataTypes.STRING, allowNull: false, defaultValue: 'activo' }, // nuevo
    envio: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }         // nuevo
}, {
    tableName: 'auxiliares_mixer',
    timestamps: false
});

/////////////////////////////////////////////////////
//                MODELO HIJO
/////////////////////////////////////////////////////

const AuxiliaresInterMixer = sequelize.define('AuxiliaresInterMixer', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    padre_id: { type: DataTypes.INTEGER, allowNull: false },
    it: { type: DataTypes.INTEGER, allowNull: false },

    // ----- CAMPOS OPERADOR -----
    operador_hora_inicial: { type: DataTypes.TIME, allowNull: true },
    operador_hora_final: { type: DataTypes.TIME, allowNull: true },
    operador_codigo: { type: DataTypes.STRING, allowNull: true },
    operador_estado: { type: DataTypes.STRING, allowNull: true },           // nuevo
    operador_nivel: { type: DataTypes.STRING, allowNull: true },
    operador_labor: { type: DataTypes.STRING, allowNull: true },
    operador_ubicacion: { type: DataTypes.STRING, allowNull: true },
    operador_observacion: { type: DataTypes.STRING, allowNull: true },
    operador_m3_lanzados: { type: DataTypes.FLOAT, allowNull: true },
    operador_labor_origen: { type: DataTypes.STRING, allowNull: true },     // nuevo
    operador_labor_destino: { type: DataTypes.STRING, allowNull: true },    // nuevo

    // ----- CAMPOS GUARDIA -----
    guardia_hora_inicial: { type: DataTypes.TIME, allowNull: true },
    guardia_hora_final: { type: DataTypes.TIME, allowNull: true },
    guardia_codigo: { type: DataTypes.STRING, allowNull: true },
    guardia_estado: { type: DataTypes.STRING, allowNull: true },            // nuevo
    guardia_nivel: { type: DataTypes.STRING, allowNull: true },
    guardia_labor: { type: DataTypes.STRING, allowNull: true },
    guardia_ubicacion: { type: DataTypes.STRING, allowNull: true },
    guardia_observacion: { type: DataTypes.STRING, allowNull: true },
    guardia_m3_lanzados: { type: DataTypes.FLOAT, allowNull: true },
    guardia_labor_origen: { type: DataTypes.STRING, allowNull: true },      // nuevo
    guardia_labor_destino: { type: DataTypes.STRING, allowNull: true }      // nuevo
}, {
    tableName: 'auxiliares_inter_mixer',
    timestamps: false
});

/////////////////////////////////////////////////////
//                RELACIÓN PADRE → HIJOS
/////////////////////////////////////////////////////

AuxiliaresMixer.hasMany(AuxiliaresInterMixer, {
    foreignKey: 'padre_id',
    as: 'detalles',
    onDelete: 'CASCADE'
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
