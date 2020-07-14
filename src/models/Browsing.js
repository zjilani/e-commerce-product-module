const mongoose = require("mongoose")

require('../app.js')

const browseSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    variantId:{
        type:String,
        required:true
    },
    mainCategory:{
        type:String,
        enum:["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
        required:true
    },
    subCategory:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        require:true
    },
    productFeatures:{
        type:Object,
        required:true,
    }
})
module.exports = mongoose.model("Browse",browseSchema)