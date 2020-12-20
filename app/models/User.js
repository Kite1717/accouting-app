'use strict';

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "The name must be at least two characters"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "The password must be at least 6 characters long"
        }
      }
    },
    role:{
      type:DataTypes.INTEGER,
      allowNull:false,

    },
    phoneNumber:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,

    },
    tcNo:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,

    },
    address:{
      type:DataTypes.STRING,


    },
    permissions:{
      type:DataTypes.STRING,
      allowNull:false,

    },

    deleterUserId:{
    type:DataTypes.INTEGER,
  
    },
    deletedAt:{
      type: DataTypes.DATE
    },

  }, {
    tableName: "users",
    paranoid: true,
    timestamps: true,
  });


  return User;
};