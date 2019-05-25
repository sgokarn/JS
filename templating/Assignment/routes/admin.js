const path = require('path');

const express = require('express');
const router = express.Router();

const mustache = require('mustache');
const fs = require('fs');

const users = [];

router.get('/add-users', (req, res) => {
    res.send(mustache.render(String(fs.readFileSync('views/add-users.ms')), {pageTitle: 'Add Users'}));
});

router.post('/add-users', (req, res) => {
    users.push(req.body.username);
    res.send(mustache.render(String(fs.readFileSync('views/users.ms')), {pageTitle: 'Users', listOfUsers: users}));
});

module.exports = {
    router: router
};