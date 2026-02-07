const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Espesor = sequelize.define('Espesor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    espesor: {
        type: DataTypes.DECIMAL(10, 2), // admite enteros y decimales
        allowNull: false
    }
}, {
    tableName: 'espesores',
    timestamps: true
});

module.exports = Espesor;
