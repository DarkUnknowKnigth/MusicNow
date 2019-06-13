'use strict'
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String,
    remember_token: String,
    susciption: Date,
    preference: { type: Schema.Types.ObjectId, ref: 'Preference' },
    playlists: [{ type: Schema.Types.ObjectId, ref: 'Preference' }],
});

module.exports = mongoose.model('User', userSchema);