const path = require('path');

const express = require('express');
const router = express.Router();

//the first parameter is optional and is the path! By default it is always `/`
router.get('/add-product', function(req, res, next){
    //console.log("In the middleware add!");
    //res.send('<form action ="/admin/add-product" method ="POST"><input type ="text" name ="title"><button type ="Submit">Add Product</button></form>');
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

//router.post('/product', function(req, res){
//routes with different methods can have same path and work fine
router.post('/add-product', function(req, res){    
    console.log(req.body);
    //res.redirect('/shop/');
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = {
    router: router
};