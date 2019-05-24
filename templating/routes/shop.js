const path = require('path');

const express = require('express');
const router = express.Router();

const mustache = require('mustache');
const fs = require('fs');

router.get('/', function(req, res, next){
    res.send(mustache.render(String(fs.readFileSync('views/shop.ms')), {pageTitle: "SHOP"}));
});

module.exports = {
    router: router
};