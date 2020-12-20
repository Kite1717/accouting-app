'use strict';

module.exports = (sequelize, DataTypes) => {

  const PSC = sequelize.define('PSC', {
 
 
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  }, {
    tableName: "productSuperCategories",
    timestamps: false,

  });

  PSC.associate = (models) => {
    PSC.hasMany(models.PC, {
      foreignKey: {
        name: 'superCategoryId',
        allowNull: false
      },
      as: 'productCategories'
    });
  };
  return PSC;
};