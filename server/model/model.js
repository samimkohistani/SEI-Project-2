const mongoose = require('mongoose')

var Schema = new mongoose.Schema({
    Player:{
        type : String,
        required : true
    },
    Age:{
        type : String,
        required : true
    },
    Team:{
        type : String,
        required : true
    },
    Position:{
        type : String,
        required : true
    },
    Contract:{
        type : String,
        required : true
    }

});

const Userdb = mongoose.model('userdb', Schema);

module.exports = Userdb