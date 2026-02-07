const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const CondicionLabor = sequelize.define('CondicionLabor', {
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
    tableName: 'condiciones_labor',
    timestamps: true 
});

module.exports = CondicionLabor;
