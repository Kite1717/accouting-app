'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('productCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      superCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'productSuperCategories', key: 'id' }
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};