const mongoose = require('mongoose');
const expressStatic = require('express-static');
const mustacheExpress = require('mustache-express');

const ninjaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    power: { type: Number, default: 1 }
});

const Ninja = mongoose.model('Ninja', ninjaSchema);

module.exports = Ninja;

