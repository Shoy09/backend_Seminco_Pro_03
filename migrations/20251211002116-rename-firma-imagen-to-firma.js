'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('usuarios', 'firma_imagen', 'firma');
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('usuarios', 'firma', 'firma_imagen');
  }
};
