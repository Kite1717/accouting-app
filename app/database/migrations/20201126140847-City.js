'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('cities', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};