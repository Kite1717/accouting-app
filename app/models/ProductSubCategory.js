'use strict';

module.exports = (sequelize, DataTypes) => {

  const PSBC = sequelize.define('PSBC', {

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'productCategories', key: 'id' }
      },


  }, {
    tableName: "productSubCategories",
    timestamps: false

  });

  PSBC.associate = (models) => {
    PSBC.belongsTo(models.PC, {
      foreignKey: {
        name: 'categoryId',
        allowNull: false
      },
      as: 'productSubCategories'
    });
  };

  return PSBC;
};