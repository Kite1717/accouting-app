  
const express = require( "express");
const db =   require("../models");
const { Sequelize } = require("../models")
const Op = Sequelize.Op

// Middlewares
const auth = require('../middlewares/auth');

//auth
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
//Roles
const UserRolls = require("../helpers/enum")

const app = express.Router();

//**********Router level 1



//create a customer
app.post("/new",async(req,res)=>{

    const {customer:data} = req.body
     let len =  data.phoneNumber.split("-")[0].length
     data.cityId = Number( data.cityId);
     data.townId = Number( data.townId);
     
     data.role = 2;

    data.customerCategoryId = Number( data.customerCategoryId);
    data.customerSubCategoryId = Number( data.customerSubCategoryId);
    data.customerRepresentativeId = Number( data.customerRepresentativeId);
    data.updatedAt = new Date();
    data.createdAt = new Date();

  
    let createdPass =  data.phoneNumber.split("-")[0][len-2] + data.phoneNumber.split("-")[0][len-1]  + data.phoneNumber.split("-")[1]
  
    
    let password = bcrypt.hashSync(createdPass, Number.parseInt(authConfig.rounds));
    data.password = password
  
    // Create a user
    db.Customer.findOne({where: {phoneNumber : data.phoneNumber  },paranoid: false}).then(customer =>{
  
      if( customer && customer.deletedAt !== null)
      {
  
        db.Customer.update(data, {where: {id: user.id},paranoid: false,returning: true,}).then(() => {
          
          db.Customer.findOne({where: {id:user.id}}).then(result => {
  
            return res.json({
              type: true,
              user: result
            });
          }).catch(e => {
            return res.json({
              type: false,
              data: e.toString(),
            });
          });
    
      }).catch(err => {
         return res.status(500).json(err);
      });
        
      }
      else{
        db.Customer.create(data).then(user => {
    
          // We create the token
          let token = jwt.sign({ user: user }, authConfig.secret, {
              expiresIn: authConfig.expires
          });
    
         return res.json({
              user: user,
              token: token
          });
    
      }).catch(err => {
         return res.status(500).json(err);
      });
      }
     
    })
  })


  //find user 
app.post('/find',auth([UserRolls.Admin]),async (req, res) => {
 
  const{filter,pageNumber,pageSize,sortField,sortOrder} = req.body.queryParams

  
  const {tcTaxNo,moneyStatus} = filter;
  let conditions  = {}

  if(tcTaxNo)
  { 
    conditions.tcTaxNo = { [Op.like]: `%${tcTaxNo}%` };
  }

  
  if(moneyStatus)
  { 
    conditions.moneyStatus = moneyStatus;
  }

  db.Customer.findAndCountAll({
    order: [
      [sortField,String(sortOrder.toUpperCase())],
      ],
      limit : pageSize,
      offset : pageSize * (pageNumber-1),
      where  :conditions
  }).then(result => {

    return res.json({
      type: true,
      totalCount : result.count,
      entities: result.rows,
    });


  }).catch(e => {
    return res.json({
      type: false,
      data: e.toString()
    })
  })
});



  //find user 
  app.get('/count/all',auth([UserRolls.Admin]),async (req, res) => {
 
  
    db.Customer.count({
      
    }).then(result => {

      return res.json({
        type: true,
        totalCount : result,
      });
  
  
    }).catch(e => {
      return res.json({
        type: false,
        data: e.toString()
      })
    })
  });
  







module.exports = app;