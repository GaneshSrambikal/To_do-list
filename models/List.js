const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//exports module to diffrent views
module.exports = List = mongoose.model('list', ListSchema);