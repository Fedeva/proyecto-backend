const {Schema, model} = require('mongoose')
const mongoose = require('mongoose')

const md5 = require('md5')

         // **cada ves que definimos un esquema..

let User = new mongoose.Schema({
   
    //_id : Types.ObjectId,
   
    email : {
           type : String,
           required : true
  }, 
    password : {
        type : String,
        required : true
  },
    registrationDate : {
        type : Date,
        default : Date.now
  },
    confirmationDate : Date,
   
    confirmetaionToken : {
        type : String,
        required : true,
        default : function(){
         return md5(Date.now())
     }
   },

})

//**User.findByToken()

 User.statics.findByToken = function (token) {
   return this.findOne({confirmetaionToken:token})
 }


 //**let user = new User()
 //**user.findByEmail()

          // **podemos definirle metodos de busca
User.methods.findByEmail = function (cb) {
   return model('User').find({email : this.email}, cb)
}




  module.exports = model('User', User)