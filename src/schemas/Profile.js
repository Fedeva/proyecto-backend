const {Schema, Types} = require('mongoose')

module.exports = new Schema ({

    //_id : types.ObjectId,

    userId :{
        type: Types.ObjectId,
        ref : 'User'
    },

    firstName : {
        type : String,
        required : true
    },

    lastName : {
        type : String,
        required : true
    },
    birthDate : Date
})