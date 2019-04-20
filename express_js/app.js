
const express = require('express');
const app = express();


app.use('/', function(req, res, next){
    console.log("Run always");
    //res.send('<h1>Always runs</h1>');
    next();
});


app.use('/add-product', function(req, res, next){
    console.log("In the middleware add!");
    res.send('<h1>Hello from Add product!</h1>');
});


app.use('/', function(req, res, next){
    console.log("In the middleware!");
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);