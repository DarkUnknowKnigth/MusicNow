'use strict'
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var albumSchema = new Schema({
    name: String,
    description: String,
    year: Number,
    image: String,
    views: Number,
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
});
module.exports = mongoose.model('Album', albumSchema);