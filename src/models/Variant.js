const mongoose = require('mongoose');
const shortid = require('shortid');

require('../app');

const variantSchema = new mongoose.Schema({
    variantId:{
        type: String,
        default: "VARIANT_"+shortid.generate(),
        unique: true
    },
    productId:{
        type: String,
        required: true,
    },
    color: {
        type:String,
    },
    price: {
        type:Number,
        required: true
    },
    size: {
        type:String
    }

});
const Variant= mongoose.model('Variant', variantSchema);

module.exports = Variant;