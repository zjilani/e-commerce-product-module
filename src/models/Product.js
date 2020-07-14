

const mongoose = require("mongoose")
const shortid = require('shortid')

// shortid.characters('0123456789a')
 
const productSchema = new mongoose.Schema({
    productId:{
        type: String,
        // default: "PRODUCT_"+shortid.generate(),
        unique:true
    },
    priority:{
        type: Number,
        default:0,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    description:[{
        type:String
    }],
    thumbnails:[{
        type:String
    }],
    markForDelete:{
        type:Boolean,
        default:false
    },
    productRating:{
        type: Number,
        default: 5
    },
    workingDays: {
        type: String,
        require: true
    },
    mainCategory:{
        type:String,
        enum:["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    features:{
        type:Object,
        required:true
    }


})


module.exports = mongoose.model("Product",productSchema)