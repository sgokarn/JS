const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/users', function(req, res){
    res.sendFile(path.join(__dirname, "../", "views", "users.html"));
});

module.exports = {
    handler: router
};