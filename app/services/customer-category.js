  
const express = require("express");
const db = require( "../models");


// Middlewares
const auth = require('../middlewares/auth');

//auth

//Roles
const UserRolls = require("../helpers/enum")

const app = express.Router();

//**********Router level 1

//find al categories
app.get('/find/category',async (req, res) => {
 
    db.CC.findAll({
      order: [
        ["title","ASC"],
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

//find all categories of existing sub category
app.get('/find/category/have/sub',async (req, res) => {
 
  db.CC.findAll({
    order: [
      ["title","ASC"],
      ],
 
  }).then(result => {


    db.CSC.findAll({
        order: [
          ["title","ASC"],
          ]
      }).then(result2 => {

      
        //filtred cats
       let cats =  [];
       for(let i = 0; i < result.length ;i++)
       {
            let temp = result2.filter((item) => item.categoryId === result[i].id)
            if(temp.length > 0)
            cats.push(result[i])
           

       }

        return res.json({
            type: true,
            entities: cats,
          });
      
      }).catch(e => {
        return res.json({
          type: false,
          data: e.toString()
        })
      })


  }).catch(e => {
    return res.json({
      type: false,
      data: e.toString()
    })
  })
});





app.get('/find/sub-category',async (req, res) => {
    db.CSC.findAll({
      order: [
        ["title","ASC"],
        ]
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

app.post("/new/category",auth([UserRolls.Admin,UserRolls.User]),async(req,res)=>{

    const {category} = req.body

  db.CC.create(category).then(result => {

    return res.json({
        type: true,
        category: result
    });

}).catch(err => {
   return res.status(500).json(err);
});
})

app.post("/new/sub-category",auth([UserRolls.Admin,UserRolls.User]),async(req,res)=>{

    const {subCategory} = req.body

  db.CSC.create(subCategory).then(result => {

    return res.json({
        type: true,
        subCategory: result
    });

}).catch(err => {
   return res.status(500).json(err);
});
})




  



module.exports = app;