const path = require('path');

const express = require('express');
const router = express.Router();

const mustache = require('mustache');
const fs = require('fs');

router.get('/', (req, res) =>{
    res.send(mustache.render(String(fs.readFileSync('views/users.ms')),{pageTitle: 'Users'}));
});

module.exports = {
    router: router
};