'use strict'
const express = require('express');
const bodyParser = require('body-parser');
//=>>>>>>>>imports
// name + C = Controller
// name + R = Route
// name + M = Model
//<<models>>

//<<controllers>>

//<<routes>>
const userR = require('./routes/user');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//RUTA BASE
app.use('/user', userR);

module.exports = app;