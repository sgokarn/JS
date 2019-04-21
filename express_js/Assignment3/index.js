const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const defRoute = require('./routes/default');
const users = require('./routes/users');

app.use('/', users.handler);
app.use('/', defRoute.handler);

app.use(function(req, res){
    res.status(404).sendFile(path.join(__dirname, "./", "views", "404.html"));
});

app.listen(3000);