'use strict'
const express = require('express');
const userC = require('../controllers/user');
var user = express.Router();

user.get('/', userC.all);
user.post('/', userC.create);
user.get('/:id', userC.one);
user.put('/', userC.update);
user.delete('/', userC.del);
module.exports = user;