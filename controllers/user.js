'use strict'

function create(req, res) {

}

function all(req, res) {
    res.send('a')
}

function one(req, res) {
    res.send('o')
}

function update(req, res) {
    res.send('u')
}

function del(req, res) {
    res.send('d')
}

module.exports = {
    create,
    all,
    one,
    update,
    del,

};