  
const express = require("express");
const db = require( "../models");


// Middlewares
const auth = require('../middlewares/auth');

//auth

//Roles
const UserRolls = require("../helpers/enum")

const app = express.Router();

//**********Router level 1

//find all super  categories
app.get('/super-category/all',async (req, res) => {
 
    db.PSC.findAll({
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

  // find all category

  app.get('/category/all',async (req, res) => {
 
    db.PC.findAll({
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




//find all super categories of existing sub category INNER JOIN
app.get('/super-category/available',async (req, res) => {
 
  db.PSC.findAll({
    order: [
      ["title","ASC"],
      ],
      include : [{
        model: db.PC,
        as : "productCategories",
        required: true,
        include : [{

          model: db.PSBC,
          as : "productSubCategories",
          required: true
        }]
       },
      
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


//find all categories of existing sub category INNER JOIN
app.get('/category/available',async (req, res) => {
 
  db.PC.findAll({
    order: [
      ["title","ASC"],
      ],
      include : [{
        model: db.PSBC,
        as : "productSubCategories",
        required: true
       }]
 
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





//find all sub categories 
app.get('/sub-category/all',async (req, res) => {
 
  db.PSBC.findAll({
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









  // new cruds
app.post("/new/super-category",auth([UserRolls.Admin,UserRolls.User]),async(req,res)=>{

    const {category} = req.body

  db.PSC.create(category).then(result => {

    return res.json({
        type: true,
        category: result
    });

}).catch(err => {
   return res.status(500).json(err);
});
})

app.post("/new/category",auth([UserRolls.Admin,UserRolls.User]),async(req,res)=>{

    const {category} = req.body

    category.superCategoryId = Number (category.superCategoryId)

  

  db.PC.create(category).then(result => {

    return res.json({
        type: true,
        subCategory: result
    });

}).catch(err => {
   return res.status(500).json(err);
});
})

app.post("/new/sub-category",auth([UserRolls.Admin,UserRolls.User]),async(req,res)=>{

    const {category} = req.body

  db.PSBC.create(category).then(result => {

    return res.json({
        type: true,
        subCategory: result
    });

}).catch(err => {
   return res.status(500).json(err);
});
})






  



module.exports = app;