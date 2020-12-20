'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    return queryInterface.createTable('banksCases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bankCaseAccountName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      currencyType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bankCode: {
        type: Sequelize.STRING,

      
      },
      bankBrach:{
        allowNull: false,
        type: Sequelize.STRING
      },
      accountNumber : {
       
        allowNull: false,
        type: Sequelize.STRING
      },
      iban : {
    
        allowNull: false,
        type: Sequelize.STRING
      },
      ekstre : {
        allowNull: false,
        type: Sequelize.STRING
      },
      openingDate:{
      
        type: Sequelize.STRING
      },

      openingPrice:{
      
        type: Sequelize.STRING
      },
      currentPrice:{
      
        type: Sequelize.STRING
      },
      


      balanceStatus:{
       
        type: Sequelize.STRING
      },

      accountType : {
        type : Sequelize.INTEGER,
        allowNull: false,
      },



      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      creatorUserId : {
        allowNull: false,
        type: Sequelize.INTEGER
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
