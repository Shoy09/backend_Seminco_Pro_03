const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const PernoSostenimiento = sequelize.define('PernoSostenimiento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    longitud: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'pernos_sostenimiento',
    timestamps: true
});

module.exports = PernoSostenimiento;
