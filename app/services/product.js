  
const express = require("express");
const db = require( "../models");
const Op = db.Sequelize.Op

// Middlewares
const auth = require('../middlewares/auth');

//auth

//Roles
const UserRolls = require("../helpers/enum")

const app = express.Router();

//**********Router level 1


//new product
app.post("/new",auth([UserRolls.Admin,UserRolls.User]),async(req,res)=>{

        const {product} = req.body
        product.creatorUserId = req.user.id
        product.currentAmount = product.openningAmount;
        product.createdAt = new Date()
        product.updatedAt = new Date()
      db.Product.create(product).then(result => {
  
        return res.json({
            type: true,
            data: "Product Added"
        });
  
    }).catch(err => {
       return res.status(500).json(err);
    });
})
   

//find all product
app.post('/find',auth([UserRolls.Admin]),async (req, res) => {
 
  const{filter,pageNumber,pageSize,sortField,sortOrder} = req.body.queryParams

  //filtering
  const {tcNo} = filter;
  let conditions  = {}

  if(tcNo)
  {
    conditions.tcNo = { [Op.like]: `%${tcNo}%` };
  }
 
 
  db.Product.findAndCountAll({
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

//get user by id
app.get('/:id',auth([UserRolls.Admin]), async (req, res) => {

 
    const id = req.params.id;
    db.Product.findOne({where: {id}}).then(result => {
  
    
      return res.json({
        type: true,
        product: result
      });
    }).catch(e => {
      return res.json({
        type: false,
        data: e.toString(),
      });
    });
  });





  app.put('/:id', auth([UserRolls.Admin]),async (req, res) => {
    const id = req.params.id;
    

    
    const {product} = req.body
   

    product.updatedAt = new Date()
   
    db.Product.update(product, {where: {id: id}}).then(result =>{
      return res.json({
        type: true,
        data: "Product Updated"
      });
    }).catch(e => {
      return res.status(500).json({
        type: false,
        data: e.toString()
      })
    })
  })





module.exports = app;