const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const TipoSostenimiento = sequelize.define('TipoSostenimiento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'tipos_sostenimiento',
    timestamps: true 
});

module.exports = TipoSostenimiento;
