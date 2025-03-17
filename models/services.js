'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ServiceSchema = Schema({
    name: String,
    duration: Number,
    price: Number,
});

module.exports = mongoose.model('services', ServiceSchema);
