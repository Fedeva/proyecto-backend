const {Schema, Types} = require('mongoose')

module.exports = new Schema({
   
    _id : Type.ObjectId,
   
    email : {
           Type : String,
           required : true
  }, 
    password : {
        Type : String,
        required : true
  },
    registrationDate : {
        Type : Date,
        default : Date.now
  },
    confirmationDate : Date,
   
    confirmetaionToken : {
        Type : String,
        required : true,
        default : function(){
         return '...'
     }
   },

})

