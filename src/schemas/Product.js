const {Schema, model} = require('mongoose')

let Product = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    price : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        default : 1
    },
    model : {
        type : String
    },
    brand : {
        type : String,
        required : true
    },
    seller_id : {
        type : String,
        required : true
    },
    views_count : {
        type : Number,
        default : 0
    },
    likes_count : {
        type : Number,
        default : 0
    }

    },
    {
    collection : "products"

    
})

module.exports = model('Product', Product)