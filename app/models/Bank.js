'use strict';

module.exports = (sequelize, DataTypes) => {

  const BankCase = sequelize.define('BankCase', {
   
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      bankCaseAccountName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      currencyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bankCode: {
        type: DataTypes.STRING,

      
      },
      bankBrach:{
        allowNull: false,
        type: DataTypes.STRING
      },
      accountNumber : {
       
        allowNull: false,
        type: DataTypes.STRING
      },
      iban : {
    
        allowNull: false,
        type: DataTypes.STRING
      },
      ekstre : {
        allowNull: false,
        type: DataTypes.STRING
      },
      openingDate:{
      
        type: DataTypes.STRING
      },

      openingPrice:{
      
        type: DataTypes.STRING
      },
      currentPrice:{
      
        type: DataTypes.STRING
      },
      


      balanceStatus:{
       
        type: DataTypes.STRING
      },

      accountType : {
        type : DataTypes.INTEGER,
        allowNull: false,
      },



      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      creatorUserId : {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      deletedAt:{
        type: DataTypes.DATE
      },
      deleterUserId:{
        type: DataTypes.INTEGER
      },

  }, {
    tableName: "banksCases",
    paranoid: true,
    timestamps: true,
  });


  return BankCase;
};