'use strict';

module.exports = (sequelize, DataTypes) => {

  const Customer = sequelize.define('Customer', {
    


    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,

      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,

      },
      townId: {
        type: DataTypes.INTEGER,
        allowNull: false,

      },
      role:{
        allowNull: false,
        type: DataTypes.INTEGER
      },

      customerStatus:{
        allowNull: false,
        type: DataTypes.STRING
      },

      taxAdministration:{
        type: DataTypes.STRING
      },

      customerLimit:{
        allowNull: false,
        type: DataTypes.FLOAT
      },

      customerLimitExchange:{
        allowNull: false,
        type: DataTypes.STRING
      },

      customerCategoryId:{
        allowNull: false,
        type: DataTypes.INTEGER
      },
      customerSubCategoryId:{
        allowNull: false,
        type: DataTypes.INTEGER
      },

      openingPrice:{
        allowNull: false,
        type: DataTypes.FLOAT
      },

      openingDate:{
       
        type: DataTypes.STRING
      },

      moneyStatus:{
       
        type: DataTypes.STRING
      },

      maturityDate:{
    
        type: DataTypes.STRING
      },
      customerRepresentativeId:{
    
        type: DataTypes.INTEGER
      },
      
      phoneNumber : {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING
      },
      tcTaxNo : {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING
      },
      address : {
      
        type: DataTypes.STRING
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt:{
        type: DataTypes.DATE
      },
      deleterUserId:{
        type: DataTypes.INTEGER
      },
  }, {
    tableName: "customers",
    paranoid: true,
    timestamps: true,
  });


  return Customer;
};