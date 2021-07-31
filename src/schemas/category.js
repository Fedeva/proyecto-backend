const{Schema,Types,model} = require('mongoose')

const Category = new Schema ({
     categoryId :{
         required :false,
         type : Types.ObjectId,
         ref : 'category'
     },

    name : {
        
        type : String,
        required : true,
        unique : true
    }

})

module.exports = model('Category',Category)