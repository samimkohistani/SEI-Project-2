const mongoose = require('mongoose')

var schema = new mongoose.Schema(
    {
        Name:{
            type: String, require: true, unique: true},
            Age: String,
            Team: String,
            Position: String,
            Contract: String
    
        }
);

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;