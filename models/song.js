'use strict'
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var songSchema = new Schema({
    name: String,
    number: Number,
    duration: String,
    file: String,
    avalilable: Boolean,
    favorite: Boolean,
    views: Number,
    plays: Number,
    playlist: { type: Schema.Types.ObjectId, ref: 'Playlist' },
    album: { type: Schema.Types.ObjectId, ref: 'Album' },
});
module.exports = mongoose.model('Song', songSchema);