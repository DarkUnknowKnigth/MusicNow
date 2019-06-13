'use strict'
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var artistSchema = new Schema({
    name: String,
    description: String,
    image: String,
    views: Number,
    genre: { type: Schema.Types.ObjectId, ref: 'Genre' },
});

module.exports = mongoose.model('Artist', artistSchema);