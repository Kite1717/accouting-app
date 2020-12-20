
const user = require("./services/user");
const product = require("./services/product");
const cityTown = require('./services/city-town')
const customerCategory = require('./services/customer-category')
const customer =require( './services/customer')
const bank = require( './services/bank')
const productCategory = require( './services/product-category')
const express = require('express');
const router = express.Router();


// Home Default
router.get('/', (req, res) => res.json({ CODE: "35" }));

/**********SERVICES********/
router.use('/api/user', user);
router.use('/api/product', product);
router.use('/api/customer', customer);
router.use('/api/city-town', cityTown);
router.use('/api/bank', bank);
router.use('/api/customer-category', customerCategory);
router.use('/api/product-category', productCategory);


/**************************/


module.exports = router;