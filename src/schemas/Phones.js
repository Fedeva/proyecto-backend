const {Schema, Types} = require('mongoose')

module.exports = new Schema({
   
    //_id : type.ObjectId,

    userId :{
        type: Types.ObjectId,
        ref : 'Phones'
    },

    countryCode : String,

    areaCode : String,

    number : String,

  
})