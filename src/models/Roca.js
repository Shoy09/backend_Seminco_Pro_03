const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Roca = sequelize.define('Roca', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false
  }
}, {
  tableName: 'rocas',
  timestamps: true
});

module.exports = Roca;
