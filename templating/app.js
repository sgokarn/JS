const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const mustache = require('mustache');
const fs = require('fs');


app.use('/admin',adminRoutes.router);
app.use('/shop', shopRoutes.router);

app.use(function(req, res){
    res.send(mustache.render(String(fs.readFileSync('views/404.ms')), {pageTitle: "PAGE NOT FOUND"}));
});

app.listen(3000);