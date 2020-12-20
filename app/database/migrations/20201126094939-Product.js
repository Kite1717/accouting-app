'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sellPrice: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sellPriceExchange: {
        type: Sequelize.STRING,
        allowNull: false,
      
      },
      sellPriceKdv:{
        allowNull: false,
        type: Sequelize.STRING
      },
      buyingPrice : {
        allowNull: false,
        type: Sequelize.STRING
      },
      buyingPriceExchange : {
        allowNull: false,
        type: Sequelize.STRING
      },
      buyingPriceKdv : {
        allowNull: false,
        type: Sequelize.STRING
      },
      taxCode : {
      
        type: Sequelize.STRING
      },

      unit : {
      
        type: Sequelize.STRING
      },
      

      stockTracking : {
        allowNull: false,
        type: Sequelize.STRING
      },

      stockCode : {
      
        type: Sequelize.STRING
      },

      openingAmount :{
        type: Sequelize.STRING
      },
      currentAmount :{
        type: Sequelize.STRING
      },
      openingDate :{
        type: Sequelize.STRING
      },

      creatorUserId : {
        type: Sequelize.STRING,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        type: Sequelize.DATE
      },
      deleterUserId:{
        type: Sequelize.INTEGER
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
