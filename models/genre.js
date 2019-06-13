'use strict'
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var genreSchema = new Schema({
    name: String,
    image: String,
    description: String,
    views: Number,
});

module.exports = mongoose.model('Genre', genreSchema);