'use strict';

module.exports = (sequelize, DataTypes) => {

  const PC = sequelize.define('PC', {

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      superCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'productSuperCategories', key: 'id' }
      },


  }, {
    tableName: "productCategories",
    timestamps: false

  });

  PC.associate = (models) => {
    PC.belongsTo(models.PSC, {
      foreignKey: {
        name: 'superCategoryId',
        allowNull: false
      },
      as: 'productCategories'
    });
  };


  PC.associate = (models) => {
    PC.hasMany(models.PSBC, {
      foreignKey: {
        name: 'categoryId',
        allowNull: false
      },
      as: 'productSubCategories'
    });
  };


  return PC;
};