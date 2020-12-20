'use strict';

module.exports = (sequelize, DataTypes) => {

  const CSC = sequelize.define('CSC', {

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'customerCategories', key: 'id' }
      },


  }, {
    tableName: "customerSubCategories",
    timestamps: false

  });

  CSC.associate = (models) => {
    CSC.belongsTo(models.CC, {
      foreignKey: {
        name: 'categoryId',
        allowNull: false
      },
      as: 'customerSubCategories'
    });
  };

  return CSC;
};