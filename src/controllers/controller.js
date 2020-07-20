const service = require('../services/services')
const inventoryServices = require('../services/inventoryServices')
const HttpError = require('../models/errors/httpError')

// Create a new folder in Documer Service
exports.createProduct= async (req, res) => {
    try {
        let response = await service.createProduct(req.fastify, req.body)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check Sub Category")
        }
        if(response.response === "Feature Value not Allowed"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Feature Value not Allowed")
        }
        if(response.response === "Feature is not defined"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Feature is not defined")
        }
        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Create Product Failed", e.message)
    }
}
exports.createCategory = async (req, res) => {
    try {
        let response = await service.createCategory(req.fastify, req.body)

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2002, "Create Category Failed", e.message)
    }
}

exports.createVariant = async (req, res) => {
    try {
        let response = await service.createVariant(req.fastify, req.body , req.query)

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2003, "Create Variant Failed", e.message)
    }
}

exports.inputBrowse = async (req,res) => {
    try {
        let response = await service.inputBrowse(req.fastify)
        // console.log(response)
        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2004, "Input Browse Failed", e.message)
    }
}
exports.uploadFile = async (req, res) => {
    try {
        console.log(req.file)
        if (!req.isMultipart()) {
            res.code(400).send(new Error('Request is not multipart'))
            return
          }
          let uploadRes ;
          const mp = req.multipart(handler, onEnd)
          
          async function handler (field, file, filename, encoding, mimetype) {
            const fileInfo ={
                file:file,
                mimetype:mimetype
            }
            let productInfo = await service.getProductById(req.fastify,req.query)

            if (productInfo === null) {
                res.code(400)
                throw new HttpError('failiure', 22005, "Product not found")
            }
            // console.log(productInfo)
            service.uploadFile(req.fastify,fileInfo, productInfo, (uploadResponse, uploadError) => {
                    if (uploadError) {
                        res.code(500)
                        throw new HttpError('failiure', 22005, "Upload of File is failed",uploadError)
                    } else {
                        req.fastify.log.debug(uploadResponse)

                        uploadRes = uploadResponse
                    }
                })
          }
         
          function onEnd(err) {
            console.log('upload completed')
            return res.status(200).send({
                            status: 'success',
                            data: uploadRes
                        })
                    
          }
        
    } catch (e) {
        throw new HttpError('failure', 22100,"Upload of File is failed", e.message)
    }
}

exports.getProducts= async (req, res) => {
    try {
        let response = await service.getProducts(req.fastify, req.body)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check Sub Category")
        }
        if(response.response  === "Product Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Invalid Values")
        }
        
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Get Product Failed", e.message)
    }
}

exports.getSubCategory= async (req, res) => {
    try {
        let response = await service.getSubCategory(req.fastify)
        
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Get SubCatgory Failed", e.message)
    }
}

exports.getFeatures= async (req, res) => {
    try {
        let response = await service.getFeatures(req.fastify,req.body)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check Sub Category")
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Get Features Failed", e.message)
    }
}
exports.filterBrowse = async (req,res) => {
    try {
        let response = await service.filterBrowse(req.fastify,req.body)
        console.log(response)
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2004, "Filter Browse Failed", e.message)
    }
}
exports.getProductPriority = async (req, res) => {
    try {
        let response = await service.getProductPriority(req.fastify, req.body)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check ProductId")
        }
        
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Get Product Priority Failed", e.message)
    }
}
exports.getVariants = async (req, res) => {
    try {
        let response = await service.getVariants(req.fastify, req.query)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check ProductId")
        }
        
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Get Product Priority Failed", e.message)
    }
}
exports.createCategory = async (req, res) => {
    try {
        let response = await service.createCategory(req.fastify, req.body)

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2002, "Create Category Failed", e.message)
    }
}



exports.getInventoryInfo = async (req, res) => {
    try {
        let response = await inventoryServices.getInventoryInfo(req.fastify, req.body)
        if(response.response === "variantId doesnot exist"){
            res.code(400)
            throw new HttpError('failiure', 2002, "Check variantId")
        }

        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2002, "Get Inventory Info Failed", e.message)
    }
}
exports.reducingResInventory = async (req, res) => {
    try {
        let response = await inventoryServices.reducingResInventory(req.fastify, req.body)
        if(response.response === "variantId doesnot exist"){
            res.code(400)
            throw new HttpError('failiure', 2002, "Check variantId")
        }

        return res.status(201).send({
            status: 'success',
            message: 'Reserved Inventory Updated !!!'
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2002, "Reducing Reserved Inventory Failed", e.message)
    }
}
exports.reducingInventory = async (req, res) => {
    try {
        let response = await inventoryServices.reducingInventory(req.fastify, req.body)
        if(response.response === "variantId doesnot exist"){
            res.code(400)
            throw new HttpError('failiure', 2002, "Check variantId")
        }
        if(response.response === "ERROR"){
            res.code(400)
            throw new HttpError('failiure', 2002, "Success or Cancelled !!!ONLY MESSAGE!!!")
        }
        
        return res.status(201).send({
            status: 'success',
            message: 'Inventory Updated !!!'
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2002, "Inventory Update Failed", e.message)
    }
}


