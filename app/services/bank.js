const express = require("express");
const db = require( "../models");
const Op = db.Sequelize.Op

// Middlewares
const auth = require('../middlewares/auth');

//auth

//Roles
const UserRolls = require("../helpers/enum")

const app = express.Router();
//new product
app.post("/new",auth([UserRolls.Admin,UserRolls.User]),async(req,res)=>{

    const {bank} = req.body
    bank.creatorUserId = req.user.id
    bank.currentPrice =  bank.openingPrice === "" ? "0" : bank.openingPrice
    bank.createdAt = new Date()
    bank.updatedAt = new Date()


    if(!bank.bankBrach) bank.bankBrach = ""
    if(!bank.accountNumber) bank.accountNumber = ""
    if(!bank.iban) bank.iban = ""
    if(!bank.ekstre) bank.ekstre = ""
  db.BankCase.create(bank).then(result => {

    return res.json({
        type: true,
        data: "Bank Added"
    });

}).catch(err => {
   return res.status(500).json(err);
});
})


app.post("/find",auth([UserRolls.Admin,UserRolls.User]),async(req,res)=>{

    const{filter,pageNumber,pageSize,sortField,sortOrder} = req.body.queryParams

  
    const {bankCaseAccountName,accountType} = filter;
    let conditions  = {}
  
    if(bankCaseAccountName !== null)
    { 
      conditions.bankCaseAccountName = { [Op.like]: `%${bankCaseAccountName}%` };
    }
  
    
    if(accountType !== null)
    { 
      conditions.accountType = accountType;
    }
  
    db.BankCase.findAndCountAll({
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
})


//get user by id
app.get('/:id',auth([UserRolls.Admin]), async (req, res) => {

 
  const id = req.params.id;
  db.BankCase.findOne({where: {id}}).then(result => {

  
    return res.json({
      type: true,
      bank: result
    });
  }).catch(e => {
    return res.json({
      type: false,
      data: e.toString(),
    });
  });
});


module.exports = app;