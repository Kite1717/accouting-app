'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shortName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,

      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      townId: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      role:{
        allowNull: false,
        type: Sequelize.INTEGER
      },

      customerStatus:{
        allowNull: false,
        type: Sequelize.STRING
      },

      taxAdministration:{
        type: Sequelize.STRING
      },

      customerLimit:{
        allowNull: false,
        type: Sequelize.FLOAT
      },

      customerLimitExchange:{
        allowNull: false,
        type: Sequelize.STRING
      },

      customerCategoryId:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      customerSubCategoryId:{
        allowNull: false,
        type: Sequelize.INTEGER
      },

      openingPrice:{
        allowNull: false,
        type: Sequelize.FLOAT
      },

      openingDate:{
       
        type: Sequelize.STRING
      },

      moneyStatus:{
       
        type: Sequelize.STRING
      },

      maturityDate:{
    
        type: Sequelize.STRING
      },
      customerRepresentativeId:{
    
        type: Sequelize.INTEGER
      },
      
      phoneNumber : {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      tcTaxNo : {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      address : {
      
        type: Sequelize.STRING
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
