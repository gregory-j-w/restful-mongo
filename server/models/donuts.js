var mongoose = require('mongoose');

var DonutSchema = new mongoose.Schema({
    name: String,
    type: String,
    filling: String,
    icing: String,
    gluten: Boolean
})

var donutModel = mongoose.model('Donuts', DonutSchema);

module.exports = donutModel;
