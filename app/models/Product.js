'use strict';

module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sellPrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sellPriceExchange: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      sellPriceKdv:{
        allowNull: false,
        type: DataTypes.STRING
      },
      buyingPrice : {
        allowNull: false,
        type: DataTypes.STRING
      },
      buyingPriceExchange : {
        allowNull: false,
        type: DataTypes.STRING
      },
      buyingPriceKdv : {

        allowNull: false,
        type: DataTypes.STRING
      },
      taxCode : {
      
        type: DataTypes.STRING
      },

      unit : {
      
        type: DataTypes.STRING
      },
      

      stockTracking : {
        allowNull: false,
        type: DataTypes.STRING
      },
      currentAmount :{
        type: DataTypes.STRING
      },

      stockCode : {
      
        type: DataTypes.STRING
      },

      openingAmount :{
        type: DataTypes.STRING
      },
      openingDate :{
        type: DataTypes.STRING
      },

      creatorUserId : {
        type: DataTypes.STRING,
        allowNull:false,
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
    tableName: "products",
    paranoid: true,
    timestamps: true,
  });


  return Product;
};