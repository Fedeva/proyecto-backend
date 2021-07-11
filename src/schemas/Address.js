const mongoose = require('mongoose')

let Address = new mongoose.Schema({
   
   // _id : type.ObjectId,
   userId :{
    type: mongoose.ObjectId,
    ref : 'User'
},
    country : String,
    
    street : String,

    city : String,

    zipCode: String,


})

module.exports = mongoose.model('Address', Address)