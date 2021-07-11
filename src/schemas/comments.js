const mongoose = require('mongoose')

let comments= new mongoose.Schema({
   
   // _id : type.ObjectId,
  
   userId :{
    type: mongoose.ObjectId,
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

module.exports = mongoose.model('comments', comments)