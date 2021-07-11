const mongoose = require('mongoose')

let Profile = new mongoose.Schema ({

    //_id : types.ObjectId,

    userId :{
        type: mongoose.ObjectId,
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

module.exports = mongoose.model('Profile',Profile)