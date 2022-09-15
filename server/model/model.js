const mongoose = require('mongoose')

var schema = new mongoose.Schema(
    {
        Name:{
            type: String,
            require: true,
            },
    
        Age:{
            type: Number,
            require: true,
        },
    
        Team:{
            type: String,
            require: true,
        },
    
        Position:{
            type: String,
            require: true,
        },
    
        Contract:{
            type: String,
            require: true,
        },

        }
);

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;


