const Product = require("../models/Product")
const Category = require("../models/Category")
const Variant = require("../models/Variant")
const Summary = require("../models/Browsing")
const Inventory = require("../models/Inventory")
const Collection = require("../models/Collection")
const AwsStorageProvider = require("./StorageProvider/storageProvider")

const uuid = require('uuid')
const config = require('../config/index')
const keys  = config.awsS3
const AWS = require('aws-sdk')

const s3 = new AWS.S3({
    accessKeyId:keys.accessKey,
    secretAccessKey:keys.secretKey,
    region:"ap-south-1"
})



const createProduct = async (fastify,createProductRequest) =>{
    const subcategories = await getSubCategory(fastify)

    if (!subcategories[createProductRequest.mainCategory].includes(createProductRequest.subCategory)){
        return {
            response : "Not Found"
        }
    } else {
        const features = await getFeatures(fastify , {
            mainCategory: createProductRequest.mainCategory,
            subCategory: createProductRequest.subCategory
            })
        const feature={}
        features.forEach((fea)=>{
            feature[fea.featureName] = fea.featureValues
            
        })
        
        for(let fea in createProductRequest.features){
            if(feature[fea]){
                if(!feature[fea].includes(createProductRequest.features[fea])){
                    return { response: "Feature Value not Allowed"}
                }
            }else{
                return {
                    response: "Feature is not defined"
                }
            }
        }
        
    }

    const collection = await Collection.findOne({})
    collection.noOfProducts += 1
    const product = new Product({
        productId:"Product_"+collection.noOfProducts,
        ...createProductRequest
    })
    await new Collection(collection).save()
    
    return product.save()
}

const createCategory = async (fastify,createCategoryRequest)=>{
    const category = new Category(createCategoryRequest)
    return category.save()
}

const getProductById = async (fastify,params) =>{
    return Product.findOne({productId:params.productId })
}

const getProducts = async (fastify,getProductRequest) => {

    if (getProductRequest.mainCategory && getProductRequest.subCategory){
        const subcategories = await getSubCategory(fastify)
        
        if (!subcategories[getProductRequest.mainCategory].includes(getProductRequest.subCategory)){
            return {
                response : "Not Found"
            }
        }
    }
    const Products = await Product.find(getProductRequest)
    const products = await Products.filter((product) => {
        return product.markForDelete === false
    })
    
    if(products.length === 0){
        return {
            response : "Product Not Found"
        }
    }
    return products
    
}

const getSubCategory = async (fastify) => {
    let categories = await Category.find({})
    let subcategories = {}
    categories.forEach((category)=>{
        if(subcategories[category.mainCategory]){
            subcategories[category.mainCategory] = [
                ...subcategories[category.mainCategory],
                category.subCategory
            ]
        }else  {
            subcategories[category.mainCategory] = [category.subCategory]
        }
    })

    return subcategories
    
}

const getFeatures = async (fastify,getFeaturesRequest) => {
    const subcategories = await getSubCategory(fastify)
    
    if (subcategories[getFeaturesRequest.mainCategory].includes(getFeaturesRequest.subCategory)){

        let feature = await Category.findOne({...getFeaturesRequest})
        
        return   feature["features"]
    } else {
        return {
            response : "Not Found"
        }
    }
   
}

const createVariant = async (fastify,createVariantRequestBody,createVariantRequestQuery)=>{
    const product = await getProducts(fastify,{productId: createVariantRequestBody.productId})
    
    if(product.length === 0) {
        return {
            "response" : "Product Not found"
        }
    }
    const collection = await Collection.findOne({})
    collection.noOfVariants += 1
    const variant = new Variant({
        variantId:"Variant_"+collection.noOfVariants,
        ...createVariantRequestBody
    })

    const inventory = new Inventory({
        variantId: "Variant_"+collection.noOfVariants,
        inventory: createVariantRequestQuery.inventory,
        reservedInventory: createVariantRequestQuery.reservedInventory
    })
    
    await inventory.save()
    await new Collection(collection).save()
    
    return variant.save()
}



const inputBrowse = async (fastify) => {
    const variants = await Variant.find({})
    const productss = await getProducts(fastify,{})
    const products = {}
    productss.forEach((product)=>{
        products[product.productId] = product
    })
    variants.forEach(async (variant) => {
            const product = products[variant.productId]
            const summary = new Summary({
                variantId : variant.variantId,
                productId: variant.productId,
                mainCategory: product.mainCategory,
                subCategory: product.subCategory,
                price:variant.price,
                productFeatures:{
                        ...product.features,
                        thumbnails:product.thumbnails,
                        brand:product.brand}
            })
            
            await summary.save()
    })
    
    const summary =  await Summary.find({})
    
    return summary
}

const uploadFile = async (fastify,uploadRequest,folderInfo,callback) =>{
    const storageProvider = new AwsStorageProvider(fastify,uploadRequest,folderInfo,callback)
    return storageProvider.uploadFile()
}
const filterBrowse = async (fastify,filterRequest)=>{
    let filter = {}
    for(var fea in filterRequest){
        if(fea === "productFeatures"){
            for(var feature in filterRequest.productFeatures){
                filter['productFeatures.'+feature] = filterRequest.productFeatures[feature]  
            }
        }else{
            filter[fea] = filterRequest[fea]
        }
    }
    
    var variants = await Summary.find(filter)
    
    const productsWithSameProductId = {}
    const products=[]
    variants.forEach((variant)=>{
        if(productsWithSameProductId[variant.productId]){
            productsWithSameProductId[variant.productId] = [...productsWithSameProductId[variant.productId], variant]
        }else{
            productsWithSameProductId[variant.productId] = [variant]
        }
    })

    for(var productId in productsWithSameProductId){
        products.push(productsWithSameProductId[productId][0])
    }
    
    return products

} 
const getProductPriority = async (fastify,getProductPriorityRequest) =>{
    const product = await Product.findOneAndUpdate({productId : getProductPriorityRequest.productId},
        {$inc : {priority:getProductPriorityRequest.priorityIcrement }})
    if (!product){
        return {
            response : "Not Found"
        }
    }
    
    return { "priority" : product["priority"]}
}

const getVariants = async (fastify,getVariantsRequest) =>{
    const product = await Product.findOne({productId : getVariantsRequest.productId})
    const variants = await Variant.find({productId : getVariantsRequest.productId})
    
    const productInfo = {...product, variants: variants}
    if (!product){
        return {
            response : "Not Found"
        }
    }
    
    return productInfo
}

module.exports ={
    createProduct,
    createCategory,
    createVariant,
    getProducts,
    getProductById,
    getFeatures,
    getSubCategory,
    uploadFile,
    inputBrowse,
    filterBrowse,
    getProductPriority,
    getVariants
}