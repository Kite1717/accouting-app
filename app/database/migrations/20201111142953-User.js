'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('users', {
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
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,

      
      },
      role:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      phoneNumber : {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      tcNo : {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      address : {
      
        type: Sequelize.STRING
      },
      permissions:{
        allowNull: false,
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
