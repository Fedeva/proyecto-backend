const {Schema, Types} = require('mongoose')

module.exports = new Schema({
   
    _id : Type.ObjectId,

    country : String,
    
    street : String,

    city : String,

    zipCode: String,

    userId : User

})