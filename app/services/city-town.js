  
const express = require("express");
const db = require( "../models");

// Middlewares
const auth = require('../middlewares/auth');

//auth

//Roles
const UserRolls = require("../helpers/enum")

const app = express.Router();

//**********Router level 1

//find all city
app.get('/find/city',async (req, res) => {
 
  db.City.findAll({
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

app.get('/find/town',async (req, res) => {
    db.Town.findAll({
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
  



module.exports = app;