const mongoose = require('mongoose')

var schema = new mongoose.schema({
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

})