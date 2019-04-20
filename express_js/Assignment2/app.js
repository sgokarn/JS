const express = require('express');
const app = express();

/*
app.use('/first-second', function(req, res, next){
    console.log("In the first Middleware!");
    next();
});

app.use('/first-second', function(req, res){
    console.log("In the second Middleware!");
    res.send("<h1>First to Second</h1>");
});
*/

app.use('/users', function(req, res){
    console.log("In the second middleware");
    res.send("<h2>In Users</h2>");
});

app.use('/', function(req, res){
    console.log("In the first Middleware!");
    res.send("<h2>FIRST MIDDLEWARE</h2>");
});

app.listen(3000);