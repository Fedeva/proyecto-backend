const {Schema, Types} = require('mongoose')

module.exports = new Schema({
   
   // _id : type.ObjectId,
   userId :{
    type: Types.ObjectId,
    ref : 'Address'
},
    country : String,
    
    street : String,

    city : String,

    zipCode: String,


})