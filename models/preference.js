'use strict'
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var preferenceSchema = new Schema({
    color: String,
    favorite_song: { type: Schema.Types.ObjectId, ref: 'Song' },
    favorite_album: { type: Schema.Types.ObjectId, ref: 'Album' },
    favorite_artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    favorite_playlist: { type: Schema.Types.ObjectId, ref: 'Playlist' },
    favorite_genre: { type: Schema.Types.ObjectId, ref: 'Genre' },
    recent_playlist: { type: Schema.Types.ObjectId, ref: 'Playlist' },
    recent_song: { type: Schema.Types.ObjectId, ref: 'Song' },
    recent_album: { type: Schema.Types.ObjectId, ref: 'Album' },
    recent_artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
});

module.exports = mongoose.model('Preference', preferenceSchema);