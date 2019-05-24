const path = require('path');

const express = require('express');
const router = express.Router();

const mustache = require('mustache');
const fs = require('fs');

const products = [];

router.get('/add-product', function(req, res, next){
    res.send(mustache.render(String(fs.readFileSync('views/add-product.ms')), {pageTitle: "ADD PRODUCT"}));
});


router.post('/add-product', function(req, res){    
    //console.log(req.body);
    products.push(req.body.title);
    res.send(mustache.render(String(fs.readFileSync('views/shop.ms')), {pageTitle: "SHOP PRODUCT", listOfProducts: products}));
});

module.exports = {
    router: router
};