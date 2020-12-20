const express = require("express");
const db = require( "../models");
const Op = db.Sequelize.Op

// Middlewares
const auth = require('../middlewares/auth');

//auth
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

//Roles
const UserRolls = require("../helpers/enum")

const app = express.Router();





//**********Router level 2

//find directly all users

app.get('/find/all',auth([UserRolls.Admin]),async (req, res) => {
 
 
 

 
  db.User.findAll({
    order: [
      ["id","ASC"],
      ],
  }).then(result => {
    return res.json({
      type: true,
      entities: result,
    });
  }).catch(e => {
    return res.json({
      type: false,
      data: e.toString()
    })
  })
});





//**********Router level 1

//find user 
app.post('/find',auth([UserRolls.Admin]),async (req, res) => {
 
  const{filter,pageNumber,pageSize,sortField,sortOrder} = req.body.queryParams

  //filtering
  const {tcNo} = filter;
  let conditions  = {}

  if(tcNo)
  { 
    conditions.tcNo = { [Op.like]: `%${tcNo}%` };
  }
 
 
  db.User.findAndCountAll({
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




//delete user
app.delete('/:id',auth([UserRolls.Admin]), async (req, res) => {
  const id = req.params.id;
    db.User.update({deleterUserId: req.user.id,deletedAt : new Date()}, {where: {id: id}},).then(result =>{
      return res.json({
        type: true,
        data: "User Deleted"
      });
    }).catch(e => {
      return res.json({
        type: false,
        data: e.toString()
      })
    })
 
});



app.put('/:id', auth([UserRolls.Admin]),async (req, res) => {
  const id = req.params.id;

  const{user:data} = req.body
  let len =  data.phoneNumber.split("-")[0].length
  let createdPass =  data.phoneNumber.split("-")[0][len-2] + data.phoneNumber.split("-")[0][len-1]  + data.phoneNumber.split("-")[1]

  
  let password = bcrypt.hashSync(createdPass, Number.parseInt(authConfig.rounds));

  req.body.user.password = password
  db.User.update(req.body.user, {where: {id: id}}).then(result =>{
    return res.json({
      type: true,
      data: "User Updated"
    });
  }).catch(e => {
    return res.status(500).json({
      type: false,
      data: e.toString()
    })
  })
})

//GET TOKEN
app.get("/me",auth([UserRolls.Admin,UserRolls.User,UserRolls.Customer]),async(req,res)=>{


  if(req.user)
  {
    return res.json({
      type: true,
      user: req.user,
    });
  }
  else{
    return res.status(401).json({ msg: "Unauthorized access" })
  }


})

//get user by id
app.get('/:id',auth([UserRolls.Admin]), async (req, res) => {

 
  const id = req.params.id;
  db.User.findOne({where: {id}}).then(result => {

  
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
});

// Login
app.post('/login',async (req, res) => {

    let { phoneNumber, password } = req.body;

    // Search user
    db.User.findOne({
        where: {
          phoneNumber,
        }
    }).then(user => {

    
        if (!user) {
        return res.status(404).json({ msg: "User with this phone number not found" });
        } else {

            if (bcrypt.compareSync(password, user.password)) {
            
                
                //We create the token
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                return  res.json({
                    user: user,
                    token: token
                })

            } else {

                // Unauthorized Access
                return  res.status(401).json({ msg: "Incorrect password" })
            }

        }

    }).catch(err => {
        return res.status(500).json(err);
    })
})




//sign up
app.post("/new",async(req,res)=>{

  const {user:data} = req.body


   let len =  data.phoneNumber.split("-")[0].length
  let createdPass =  data.phoneNumber.split("-")[0][len-2] + data.phoneNumber.split("-")[0][len-1]  + data.phoneNumber.split("-")[1]

  
  let password = bcrypt.hashSync(createdPass, Number.parseInt(authConfig.rounds));

  // Create a user
  db.User.findOne({where: {phoneNumber : data.phoneNumber  },paranoid: false}).then(user =>{

    if( user && user.deletedAt !== null)
    {

      db.User.update({
        fullName: data.fullName,
        phoneNumber : data.phoneNumber,
        email:data.email,
        role :1,
        password: password,
        address :data.address,
        tcNo : data.tcNo,
        updatedAt: new Date(),
        deleterUserId : null,
        permissions : "[]",
        deletedAt : null,

      }, {where: {id: user.id},paranoid: false,returning: true,}).then(() => {
        
        db.User.findOne({where: {id:user.id}}).then(result => {

         
        
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
      db.User.create({
        fullName: data.fullName,
        phoneNumber : data.phoneNumber,
        email:data.email,
        role:1,
        password: password,
        permissions : "[]",
        address :data.address,
        tcNo : data.tcNo,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(user => {
  
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









module.exports = app;