const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes.router);
app.use('/shop', shopRoutes.router);

app.use(function(req, res){
    //res.statusCode = 404;
    res.status(404).sendFile(path.join(__dirname , "views", "404.html"));
});

app.listen(3000);