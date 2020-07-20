const HttpError = require('../models/errors/httpError')

exports.validateCreateProductRequest = function (req, res, done) {
    if (!req.body.productName) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'productName is missing'))
    }else if (!req.body.brand) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'companyName is missing'))
    }else if (!req.body.mainCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'mainCategory is missing'))
    } else if (!req.body.subCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'subCategory is missing'))
    }  
    else if (Object.keys(req.body.features).length === 0) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'features is missing'))
    }  
    else {
        done()
    }
}

exports.validateCreateVariantRequest = function (req, res, done) {
    
    if (!req.body.productId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'productId is missing'))
    }else if (!req.body.price) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'price is missing'))
    }
    else{
        done()
    }
}



exports.validateCreateCategoryRequest = function (req, res, done) {
    if (!req.body.mainCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'mainCategory is missing'))
    }else if (!req.body.subCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'subCategory is missing'))
    }else if (req.body.features.length === 0) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'features is missing'))
    }
    else {
        done()
    }
}

exports.validateUploadFileRequest = function (req, res, done) {
    if(!req.body.productId){
        res.code(400)
        done(new HttpError("failiure",20002,"productId missing"))
    }else if (!req.body.mimeType) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'mimeType is missing'))
    }else if (!req.body.fileContent && !req.body.fileUrl) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'subCategory is missing'))
    }
    else {
        done()
    }
}

exports.validateInputBrowseRequest = function (req, res, done) {
    if (!req.body.variantId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'variantId is missing'))
    }
     
    else {
        done()
    }
}
exports.validateGetProductsRequest = function (req, res, done) {

    if (!(req.body.productName || req.body.brand || req.body.mainCategory || req.body.subCategory || req.body.priority || req.body.productId)) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Body is missing'))
    }
    else {
        done()
    }
}
exports.validateGetFeaturesRequest = function (req, res, done) {

    if (!req.body.mainCategory) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'mainCategory is missing'))
    }
    else if (!req.body.subCategory){
        res.code(400)
        done(new HttpError('faliure', 20001, 'subCategory is missing'))
    }
    else {
        done()
    }
}
exports.validateFilterBrowseRequest = function (req, res, done) {

    if (!req.body.mainCategory) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'mainCategory is missing'))
    }
    else if (!req.body.subCategory){
        res.code(400)
        done(new HttpError('faliure', 20001, 'subCategory is missing'))
    }
    else {
        done()
    }
}

exports.validateProductPriorityRequest = function (req, res, done) {

    if (!req.body.productId) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'productId is missing'))
    }
    else if (!req.body.priorityIcrement){
        res.code(400)
        done(new HttpError('faliure', 20001, 'priorityIcrement is missing'))
    }
    else {
        done()
    }
}
exports.validateProductPriorityRequest = function (req, res, done) {

    if (!req.query.productId) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'productId is missing'))
    }
    else {
        done()
    }
}
exports.validateGetInventoryInfoRequest = function (req, res, done) {

    if (!req.body.variantId) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'variantId is missing'))
    }
    else {
        done()
    }
}
exports.validateReducingResInventoryRequest = function (req, res, done) {

    if (!req.body.variantId) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'variantId is missing'))
    }
    if (!req.body.quantity) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'quantity is missing'))
    }
    else {
        done()
    }
}
exports.validateReducingInventoryRequest = function (req, res, done) {

    if (!req.body.variantId) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'variantId is missing'))
    }
    else if (!req.body.quantity) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'quantity is missing'))
    }
    else if (!req.body.message) 
    {
        res.code(400)
        done(new HttpError('faliure', 20001, 'message is missing'))
    }
    else {
        done()
    }
}