'use strict'
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var playlistSchema = new Schema({
    name: String,
    image: String,
    views: String,
    genre: { type: Schema.Types.ObjectId, ref: 'Genre' },
});

module.exports = mongoose.model('Playlist', playlistSchema);