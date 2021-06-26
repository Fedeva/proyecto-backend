const {Schema, Types} = require('mongoose')

module.exports = new Schema ({

    _id : Type.ObjectId,

    userId : User,

    firstName : {
        Type : String,
        required : true
    },

    lastName : {
        Type : String,
        required : true
    },
    birthDate : Date|String
})