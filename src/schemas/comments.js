const {Schema, Types} = require('mongoose')

module.exports = new Schema({
   
   // _id : type.ObjectId,
  
   userId :{
    type: Types.ObjectId,
    ref : 'comments'
},

    body : {
        type : String,
        required : true
    },
    
    creationDate : Date,

   
    dislikeCount : Number,

    likesCount : Number,

})