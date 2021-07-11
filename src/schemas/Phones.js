const mongoose = require('mongoose')

let Phones= new mongoose.Schema({
   
    //_id : type.ObjectId,

    userId :{
        type: mongoose.ObjectId,
        ref : 'Phones'
    },

    countryCode : String,

    areaCode : String,

    number : String,

  
})

module.exports = mongoose.model('Phones',Phones)