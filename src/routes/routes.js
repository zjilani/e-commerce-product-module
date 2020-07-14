const controllers = require('../controllers/controller')
const validators = require('../validators/validators')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "POST",
        url: "/createProduct",
        handler: controllers.createProduct,
        schema: documentation.createProduct,
        preValidation: validators.validateCreateProductRequest
    },
    {
        method: "POST",
        url: "/createCategory",
        handler: controllers.createCategory,
        schema: documentation.createCategory,
        preValidation: validators.validateCreateCategoryRequest
    },
    {
        method: "POST",
        url: "/createVariant",
        handler: controllers.createVariant,        
        schema: documentation.createVariant,
        preValidation: validators.validateCreateVariantRequest
    },
    {
        method: "GET",
        url: "/inputBrowse",
        handler: controllers.inputBrowse, 
        schema: documentation.inputBrowse       
    },
    {
        method: "POST",
        url: "/uploadImage",
        handler: controllers.uploadFile, 
              
    },
    {
        method: "POST",
        url: "/getProducts",
        handler: controllers.getProducts, 
        schema:documentation.getProducts,
        preValidation: validators.validateGetProductsRequest      
    },
    {
        method: "GET",
        url: "/getSubCategory",
        handler: controllers.getSubCategory, 
        schema:documentation.getSubCategory,
           
    },
    {
        method: "POST",
        url: "/getFeatures",
        handler: controllers.getFeatures, 
        schema:documentation.getFeatures,
        preValidation: validators.validateGetFeaturesRequest      
    },
    {
        method: "POST",
        url: "/filterBrowse",
        handler: controllers.filterBrowse, 
        schema:documentation.filterBrowse,
        preValidation: validators.validateFilterBrowseRequest      
    },
    {
        method: "POST",
        url: "/getProductPriority",
        handler: controllers.getProductPriority, 
        schema:documentation.getProductPriority,
        preValidation: validators.validateProductPriorityRequest      
    },
    {
        method: "GET",
        url: "/getVariants",
        handler: controllers.getVariants, 
        schema:documentation.getVariants,
        preValidation: validators.validateGetVariantsRequest      
    },
    {
        method: "GET",
        url: "/getInventoryInfo",
        handler: controllers.getInventoryInfo, 
        schema:documentation.getInventoryInfo,
        preValidation: validators.validateGetInventoryInfoRequest      
    },
    {
        method: "POST",
        url: "/reducingResInventory",
        handler: controllers.reducingResInventory, 
        schema:documentation.reducingResInventory,
        preValidation: validators.validateReducingResInventoryRequest      
    },
    {
        method: "POST",
        url: "/reducingInventory",
        handler: controllers.reducingInventory, 
        schema:documentation.reducingInventory,
        preValidation: validators.validateReducingInventoryRequest      
    }
    
]


module.exports = routes