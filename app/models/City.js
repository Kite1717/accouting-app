'use strict';

module.exports = (sequelize, DataTypes) => {

  const City = sequelize.define('City', {
 
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  }, {
    tableName: "cities",
    timestamps: false,

  });

  City.associate = (models) => {
    City.hasMany(models.Town, {
      foreignKey: {
        name: 'cityId',
        allowNull: false
      },
      as: 'towns'
    });
  };
  return City;
};