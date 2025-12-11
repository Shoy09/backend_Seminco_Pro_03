const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const OrigenDestino = sequelize.define('OrigenDestino', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    operacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_labor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    labor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ala: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'origen_destino',
    timestamps: false
});

module.exports = OrigenDestino;
