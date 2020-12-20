'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('towns', {
      id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cityId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'cities', key: 'id' }
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};