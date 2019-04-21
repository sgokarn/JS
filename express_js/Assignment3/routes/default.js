const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../", "views", "def.html"));
});

router.post('/', function(req, res){
    console.log(req.body);
    res.sendFile(path.join(__dirname, "../", "views", "def.html"));
});

module.exports = {
    handler: router
};