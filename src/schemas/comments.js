const {Schema, Types} = require('mongoose')

module.exports = new Schema({
   
    _id : Type.ObjectId,
  
    body : {
        Type : String,
        required : true
    },
    creationDate : Date,

    userId : User,
   
    dislikeCount : Number,

    likesCount : Number,

})