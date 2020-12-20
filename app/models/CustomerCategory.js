'use strict';

module.exports = (sequelize, DataTypes) => {

  const CC = sequelize.define('CC', {
 
 
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  }, {
    tableName: "customerCategories",
    timestamps: false,

  });

  CC.associate = (models) => {
    CC.hasMany(models.CSC, {
      foreignKey: {
        name: 'categoryId',
        allowNull: false
      },
      as: 'customerSubCategories'
    });
  };
  return CC;
};