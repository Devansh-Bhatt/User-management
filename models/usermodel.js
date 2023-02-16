const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    id:{
        type: Integer,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    }
    
    
})

module.exports = mongoose.model('User',userschema);