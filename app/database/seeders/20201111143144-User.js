'use strict';

const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('users', [{
        fullName: 'CODE 35',
        email: 'bilgi@code35.net',
        phoneNumber : '(222) 222-2222',
        role: 0,
        permissions : '[]',
        tcNo : "22222222222",
        password: bcrypt.hashSync('260620', +authConfig.rounds),
        createdAt: new Date(),
        updatedAt: new Date(),
        

      }], {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
