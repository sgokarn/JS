const express = require('express');
const app = express();

const usersRoutes = require('./routes/users');
const addUserRoutes = require('./routes/admin')

const mustache = require('mustache');
const path = require('path');
const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', usersRoutes.router);
app.use('/admin', addUserRoutes.router);

app.use((req, res) => {
    res.status(404);
    res.send(mustache.render(String(fs.readFileSync('views/404.ms')), {pageTitle: '404 Err Page', error: 'PAGE NOT FOUND'}));
});

app.listen(3000);