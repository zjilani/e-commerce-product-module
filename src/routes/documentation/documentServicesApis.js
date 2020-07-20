exports.createProduct = {
    description: 'Create a new product in Product Service',
    tags: ["Products"],
    summary: 'Create a product',
    body: {
        "type": "object",
        "properties": {
            "priority": {
                "type": "number"
            },
            "productName": {
                "type": "string"
            },
            "brand":{
                "type":"string",
            },
            "description":{
                "type":"array",
                "items":{
                    "type":"string"
                }
            },
            "productRating":{
                "type": "string"
            },
            "workingDays" :{
                "type":"string"
            },
            "thumbnails":{
                "type":"array",
                "items":{
                    "type":"string"
                }
            },
            "markForDelete":{
                "type":"boolean",
                "default":"false",
                
            },
            "mainCategory":{
                "type":"string",
                "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                },
            "subCategory":{
                "type":"string",
            },
            "features":{
                "type":"object",
            }
        },
        "required": [
            "productName",
            "brand",
            "workingDays",
            "mainCategory",
            "subCategory",
            "features"
        ]
    },
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "productId":{
                            "type": "string",
                        },
                        "priority": {
                            "type": "number"
                        },
                        "productName": {
                            "type": "string"
                        },
                        "brand":{
                            "type":"string",
                        },
                        "description":{
                            "type":"array",
                            "items":{
                                "type":"string"
                            }
                        },
                        "productRating":{
                            "type": "string"
                        },
                        "workingDays" :{
                            "type":"string"
                        },
                        "thumbnails":{
                            "type":"array",
                            "items":{
                                "type":"string"
                            }
                        },
                        "markForDelete":{
                            "type":"boolean",
                        },
                        "mainCategory":{
                            "type":"string",
                            "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                            },
                        "subCategory":{
                            "type":"string",
                        },
                        "features":{
                            "type":"object",
                        }
                    },
                    "required": [
                        "productId",
                        "productName",
                        "brand",
                        "workingDays",
                        "mainCategory",
                        "subCategory",
                        "features"
                    ]
                },
            },
                    "required": [
                            "status",
                            "data"
                            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
    }
exports.createVariant = {
    description: 'Create a new variant of product in Product Service',
    tags: ["Products"],
    summary: 'Create a Variant',
    body: {
        "type": "object",
        "properties": {
            "productId": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "price":{
                "type":"number",
            },
            "size":{
                "type":"string",
            },
            
        },
        "required": [
            "productId",
            "price"
        ]
    },
    query: {
        "type": "object",
        "properties":{
            "inventory":{"type":"number"},
            "reservedInventory":{"type":"number"}
        },
        "required" : [
            "inventory",
            "reservedInventory"
        ]
        
    },
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "variantId": {
                            "type": "string"
                        },
                        "productId": {
                            "type": "string"
                        },
                        "color": {
                            "type": "string"
                        },
                        "price":{
                            "type":"number",
                        },
                        "size":{
                            "type":"string",
                        },
                        
                    },
                    "required": [
                        "variantId",
                        "productId",
                        "price"
                    ]
                },
            },
                "required": [
                        "status",
                        "data"
                        ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.createCategory = {
    description: 'Create a new category in Product Service',
    tags: ["Products"],
    summary: 'Create a category',
    body: {
        "type": "object",
        "properties": {
            "mainCategory":{
                "type":"string",
                "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                },
            "subCategory":{
                "type":"string",
            },
            "features":{
                "type":"array",
                "items":{
                    "type": "object",
                    "properties" :{
                        "featureName":{
                            "type":"string"
                        },
                        "featureValues":{
                            "type":"array",
                            "items":{
                                "type":"string"
                            }
                        }
                    }
                },
                "required":[
                    "featureName",
                    "featureValues"
                ]
            }
            
        },
        "required": [
            "mainCategory",
            "subCategory",
            "features"
        ]
    },
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "mainCategory":{
                            "type":"string",
                            "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                            },
                        "subCategory":{
                            "type":"string",
                        },
                        "features":{
                            "type":"array",
                            "items":{
                                "type": "object",
                                "properties" :{
                                    "featureName":{
                                        "type":"string"
                                    },
                                    "featureValues":{
                                        "type":"array",
                                        "items":{
                                            "type":"string"
                                        }
                                    }
                                }
                            },
                            "required":[
                                "featureName",
                                "featureValues"
                            ]
                        }
                        

                    },
                    "required": [
                        "mainCategory",
                        "subCategory",
                        "features"
                    ]
                }
        },
        "required": [
                "status",
                "data"
                ]
            }     
        , 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
    }

    exports.inputBrowse = {
        description: 'Create a Summary in Product Service',
        tags: ["Products"],
        summary: "Creating Input Browse in Summary ",
        response: {
            201: {
                description: 'Successful response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string",
                        "enum": ['faliure', 'success'],
                    },
                    "message": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items":{
                        "type": "object",
                        "properties": {
                            "productId":{
                                "type": "string",
                            },
                            "variantId": {
                                "type": "string"
                            },
                            "mainCategory":{
                                "type":"string",
                                "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                                },
                            "subCategory":{
                                "type":"string",
                            },
                            "price":{
                                "type":"number"
                            },
                            "productFeatures":{
                                "type":"object",
                            }
                        }
                    },
                        "required": [
                            "productId",
                            "variantId",
                            "mainCategory",
                            "subCategory",
                            "price",
                            "productFeatures"
                        ]
                    },
                },
                        "required": [
                                "status",
                                "data"
                                ]
            }, 400: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code"
                ]
            },
            500: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code",
                    "errorCause"
                ]
            }
        }
        }
    exports.uploadFile = {
            description: 'Upload Image in  Product Service',
            tags: ["Products"],
            summary: "Upload Image Via Either FileConent or File Url with its type ",
            body:{
                "type":"object",
                "properties" : {
                    "mimeType":{
                        "type":"string",
                    },
                    "productId": {
                        "type": "string"
                    },
                    "fileContent":{
                        "type": "string"
                    },
                    "fileUrl":{
                        "type": "string"
                    },
                },
                "required":[
                    "mimeType",
                    "productId"
                ]
            },
            response: {
                201: {
                    description: 'Successful response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string",
                            "enum": ['faliure', 'success'],
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "object",
                            "properties": {
                                "fileUrl":{
                                    "type": "string",
                                },
                            },
                            "required": [
                                "url"
                            ]
                        },
                    },
                            "required": [
                                    "status",
                                    "data"
                                    ]
                }, 400: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code"
                    ]
                },
                500: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code",
                        "errorCause"
                    ]
                }
            }
            }
            
            exports.getProducts = {
                description: 'Get Product details from Products Service',
                tags: ["Products"],
                summary: 'Get Product details',
                body: {
                    "type": "object",
                    "properties": {
                        "productId":{
                            "type":"string",
                        },
                        "productName": {
                            "type": "string"
                        },
                        "brand":{
                            "type":"string",
                        },
                        "mainCategory":{
                            "type":"string",
                            "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                            },
                        "subCategory":{
                            "type":"string",
                        },
                    },
                    "required": []
                },
                response: {
                    200: {
                        description: 'Successful response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string",
                                "enum": ['faliure', 'success'],
                            },
                            "message": {
                                "type": "string"
                            },
                            "data":{
                                "type": "array",
                                "items": {
                                "type":"object",
                                "properties": {
                                    "productId":{
                                        "type": "string",
                                    },
                                    "priority": {
                                        "type": "number"
                                    },
                                    "productName": {
                                        "type": "string"
                                    },
                                    "brand":{
                                        "type":"string",
                                    },
                                    "description":{
                                        "type":"array",
                                        "items":{
                                            "type":"string"
                                        }
                                    },
                                    "productRating":{
                                        "type":"number"
                                    },
                                    "workingDays" :{
                                        "type":"string"
                                    },
                                    "thumbnails":{
                                        "type":"array",
                                        "items":{
                                            "type":"string"
                                        }
                                    },
                                    "markForDelete":{
                                        "type":"boolean",
                                    },
                                    "mainCategory":{
                                        "type":"string",
                                        "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                                        },
                                    "subCategory":{
                                        "type":"string",
                                    },
                                    "features":{
                                        "type":"object",
                                    }
                                },
                                "required": [
                                    "productId",
                                    "productName",
                                    "brand",
                                    "mainCategory",
                                    "subCategory",
                                    "features"
                                ]
                            }
                            },
                        },
                                "required": [
                                        "status",
                                        "data"
                                        ]
                    }, 400: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code"
                        ]
                    },
                    500: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code",
                            "errorCause"
                        ]
                    }
                }
                }
exports.getSubCategory = {
    description: 'Get Subcategory details from Products Service',
    tags: ["Products"],
    summary : "Get Main and Sub Categories details",               
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "array",  
                    },
                }
        },
        "required": [
                "status",
                "data"
                ]
            }     , 400: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code"
                            ]
                        },
                        500: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code",
                                "errorCause"
                            ]
                        }
                    }
                    }
                    exports.getFeatures = {
                        description: 'Get Features by category or Subcategory',
                        tags: ["Products"],
                        summary: 'Get Features',
                        body:{
                            "type":"object",
                            "properties":{
                                "mainCategory":{
                                    "type":"string"
                                },
                                "subCategory":{
                                    "type":"string"
                                },
                            },
                            required:[
                                "mainCategory",
                                "subCategory"
                            ]
                        },
                        response: {
                            200: {
                                description: 'Successful response',
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "enum": ['faliure', 'success'],
                                    },
                                    "message": {
                                        "type": "string"
                                    },
                                    "data": {
                                        "type": "array",
                                        "items": {
                                            "type":"object",
                                            "properties":{
                                            "featureName":{
                                                "type": "string",
                                            },
                                            "featureValues": {
                                                "type": "array",
                                                "items":{
                                                    "type":"string"
                                                }
                                            },
                                            },
                                            "required":[
                                                "featureName",
                                                "featureValues"
                                            ]
                                    },
                                },
                            },
                                        "required": [
                                                "status",
                                                "data"
                                                ]
                            }, 400: {
                                "description": 'Error response',
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string"
                                    },
                                    "code": {
                                        "type": "integer"
                                    },
                                    "errorCause": {
                                        "type": "string"
                                    },
                                    "message": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "status",
                                    "message",
                                    "code"
                                ]
                            },
                            500: {
                                "description": 'Error response',
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string"
                                    },
                                    "code": {
                                        "type": "integer"
                                    },
                                    "errorCause": {
                                        "type": "string"
                                    },
                                    "message": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "status",
                                    "message",
                                    "code",
                                    "errorCause"
                                ]
                            }
                        }
                        }
            
        exports.filterBrowse = {
            description: 'Create a Filter in Product Service',
            tags: ["Products"],
            summary: "Creating Filter of Products ",
            body: {
                "type": "object",
                "properties": {
                    "mainCategory":{
                        "type":"string",
                        "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                        },
                    "subCategory":{
                        "type":"string",
                    },
                    "price":{
                        "type":"number"
                    }
                },
                "required": [
                    "mainCategory",
                    "subCategory"
                ]
            },
            response: {
                200: {
                    description: 'Successful response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string",
                            "enum": ['faliure', 'success'],
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "array",
                            "items":{
                            "type": "object",
                            "properties": {
                                "productId":{
                                    "type": "string",
                                },
                                "variantId": {
                                    "type": "string"
                                },
                                "mainCategory":{
                                    "type":"string",
                                    "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                                    },
                                "subCategory":{
                                    "type":"string",
                                },
                                "price":{
                                    "type":"number"
                                },
                                "productFeatures":{
                                    "type":"object",
                                }
                            }
                        },
                            "required": [
                                "productId",
                                "variantId",
                                "mainCategory",
                                "subCategory",
                                "price",
                                "productFeatures"
                            ]
                        },
                    },
                            "required": [
                                    "status",
                                    "data"
                                    ]
                }, 400: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code"
                    ]
                },
                500: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code",
                        "errorCause"
                    ]
                }
            }
            }
    exports.getProductPriority = {
        description: 'Priority of Product Product Service',
        tags: ["Products"],
        summary: "Getting Product's Priorty ",
        body: {
            "type": "object",
            "properties": {
                "productId":{
                    "type": "string",
                },
                "priorityIcrement":{
                    "type": "number",
                },
                
            },
            "required": [
                "productId",
                "priorityIcrement"
            ]
        },
        response: {
            200: {
                description: 'Successful response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string",
                        "enum": ['faliure', 'success'],
                    },
                    "message": {
                        "type": "string"
                    },
                },
                        "required": [
                                "status"
                                ]
            }, 400: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code"
                ]
            },
            500: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code",
                    "errorCause"
                ]
            }
        }
        }
        exports.getVariants = {
            description: 'Create a new product in Product Service',
            tags: ["Products"],
            summary: 'Create a product',
            query: {
                    "type": "object",
                    "properties": {
                        "productId": {
                            "type": "string"
                        }
                    
                        },
                "required": [
                    "productId",
                    
                ]
            },
            response: {
                201: {
                    description: 'Successful response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string",
                            "enum": ['failiure', 'success'],
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "object",
                            "properties": {
                                "priority": {
                                    "type": "number"
                                },
                                "productName": {
                                    "type": "string"
                                },
                                "brand":{
                                    "type":"string",
                                },
                                "description":{
                                    "type":"string",
                                },
                                "thumbnails":{
                                    "type":"array",
                                    "items":{
                                        "type":"string"
                                    }
                                },
                                "markForDelete":{
                                    "type":"boolean",
                                    "default":"false",
                                    
                                },
                                "mainCategory":{
                                    "type":"string",
                                    "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                                    },
                                "subCategory":{
                                    "type":"string",
                                },
                                "features":{
                                    "type":"object",
                                },
                                "variants":{
                                    "type":"array",
                                    "items":{
                                        "type": "object",
                                    "properties": {
                                        "productId": {
                                            "type": "string"
                                        },
                                        "color": {
                                            "type": "string"
                                        },
                                        "price":{
                                            "type":"number",
                                        },
                                        "size":{
                                            "type":"string",
                                        },
                                        
                                    }
                                        
                                    }
                                }
                            }, 
                            "required": [
                                "productName",
                                "brand",
                                "mainCategory",
                                "subCategory",
                                "features",
                                "variants"
                            ]
                        }
                    },
                            "required": [
                                    "status",
                                    "data"
                                    ]
                }, 400: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code"
                    ]
                },
                500: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code",
                        "errorCause"
                    ]
                }
            }
            }
            exports.getInventoryInfo = {
                description: 'Get Inventory Info of Products ',
                tags: ["Inventory"],
                summary: 'Get Inventory Info',
                body: {
                    "type": "object",
                    "properties": {
                        "variantId":{
                            "type":"array",
                            "items":{
                                "type":"string"
                            }
                        }
                    },
                    "required": [
                        "variantId"
                    ]
                },
                response: {
                    200: {
                        description: 'Successful response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string",
                                "enum": ['faliure', 'success'],
                            },
                            "message": {
                                "type": "string"
                            },
                            "data":{
                                "type":"array",
                                "properties": {
                                    "variantId":{
                                        "type":"string"
                                    },
                                    "inventory":{
                                        "type": "number",
                                    },
                                    "reservedInventory":{
                                        "type":"number",
                                    }
                                },
                                "required": [
                                    "variantId",
                                    "inventory",
                                    "reservedInventory"
                                ]
                            
                            },
                        },
                                "required": [
                                        "status",
                                        "data"
                                        ]
                    }, 400: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code"
                        ]
                    },
                    500: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code",
                            "errorCause"
                        ]
                    }
                }
                }
                exports.reducingResInventory = {
                    description: 'Updating Inventory of Products ',
                    tags: ["Inventory"],
                    summary: 'Reducing Reserved Inventory',
                    body: {
                        "type": "object",
                        "properties": {
                            "variantId":{
                                "type": "array",
                                "items":{
                                    "type": "string"
                                }

                            },
                            "quantity" :{
                                "type": "array",
                                "items":{
                                    "type": "number"
                                }
                            }
                        },
                        "required": [
                            "variantId",
                            "quantity"
                        ]
                    },
                    response: {
                        200: {
                            description: 'Successful response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string",
                                    "enum": ['faliure', 'success'],
                                },
                                "message": {
                                    "type": "string"
                                },
                                
                            },
                                    "required": [
                                            "status",
                                            "message"
                                            ]
                        }, 400: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code"
                            ]
                        },
                        500: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code",
                                "errorCause"
                            ]
                        }
                    }
                    }
                    exports.reducingInventory = {
                        description: 'Updating Inventory of Products ',
                        tags: ["Inventory"],
                        summary: 'Reducing Inventory ',
                        body: {
                            "type": "object",
                            "properties": {
                                "variantId":{
                                    "type": "array",
                                    "items":{
                                        "type": "string"
                                    }
    
                                },
                                "quantity" :{
                                    "type": "array",
                                    "items":{
                                        "type": "number"
                                    }
                                },
                                "message" : {
                                    "type" : "string"
                                }
                            },
                            "required": [
                                "variantId",
                                "quantity",
                                "message"
                            ]
                        },
                        response: {
                            200: {
                                description: 'Successful response',
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "enum": ['faliure', 'success'],
                                    },
                                    "message": {
                                        "type": "string"
                                    },
                                    // "data":{
                                    //     "type":"object",
                                    //     "properties": {
                                    //         "variantId":{
                                    //             "type": "string"
                                    //         },
                                    //         "inventory":{
                                    //             "type": "number",
                                    //         },
                                    //         "reservedInventory":{
                                    //             "type":"number",
                                    //         }
                                    //     },
                                    //     "required": [
                                    //         "inventory",
                                    //         "reservedInventory"
                                    //     ]
                                    
                                    // },
                                },
                                        "required": [
                                                "status",
                                                // "data"
                                                ]
                            }, 400: {
                                "description": 'Error response',
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string"
                                    },
                                    "code": {
                                        "type": "integer"
                                    },
                                    "errorCause": {
                                        "type": "string"
                                    },
                                    "message": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "status",
                                    "message",
                                    "code"
                                ]
                            },
                            500: {
                                "description": 'Error response',
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string"
                                    },
                                    "code": {
                                        "type": "integer"
                                    },
                                    "errorCause": {
                                        "type": "string"
                                    },
                                    "message": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "status",
                                    "message",
                                    "code",
                                    "errorCause"
                                ]
                            }
                        }
                        }
        