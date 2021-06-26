const {Schema, Types} = require('mongoose')

module.exports = new Schema({
   
    _id : Type.ObjectId,

    countryCode : String,

    areaCode : String,

    number : String,

    userId : User
  
})