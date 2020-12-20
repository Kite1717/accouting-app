'use strict';

module.exports = (sequelize, DataTypes) => {

  const Town = sequelize.define('Town', {
    id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey:true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cityId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: { model: 'cities', key: 'id' }
      },


  }, {
    tableName: "towns",
    timestamps: false

  });

  Town.associate = (models) => {
    Town.belongsTo(models.City, {
      foreignKey: {
        name: 'cityId',
        allowNull: false
      },
      as: 'towns'
    });
  };

  return Town;
};