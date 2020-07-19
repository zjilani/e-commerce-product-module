const Inventory = require("../models/Inventory")

const getInventoryInfo = async (fastify,getInventoryInfoRequest)=>{
  
    // const test = await Inventory.find({ variantId : {$in: ['Variant_','Variant_2','Variant_3']}})
    // console.log(test)

    const inventoryInfo = await Inventory.findOne({variantId:getInventoryInfoRequest.variantId})
    if(!inventoryInfo){
        return {
            response: "variantId doesnot exist"
        }
    }
    const inventory = inventoryInfo.inventory
    const reservedInventory = inventoryInfo.reservedInventory
    return {inventory,reservedInventory}
}

const reducingResInventory = async (fastify,reducingResInventoryRequest) =>{
    const inventories = await Inventory.find({ variantId : {$in: reducingResInventoryRequest.variantId}})
    if(inventories.length != reducingResInventoryRequest.variantId.length){
        return {
            response: "variantId doesnot exist"
        }
    }
    for(let i=0 ; i<inventories.length ; i++){
        inventories[i].reservedInventory -= reducingResInventoryRequest.quantity[i]
        await inventories[i].save()
    }
    return {response: "Done"}
}

const reducingInventory = async (fastify,reducingInventoryRequest)=>{
    const inventories = await Inventory.find({ variantId : {$in: reducingInventoryRequest.variantId}})
    if(reducingInventoryRequest.message === "Success"){
        
        
        if(inventories.length != reducingInventoryRequest.variantId.length){
            return {
                response: "variantId doesnot exist"
            }
        }
        console.log(inventories)
        for(let i=0 ; i<inventories.length ; i++){
            inventories[i].inventory -= reducingInventoryRequest.quantity[i]
            await inventories[i].save()
        }
        
        return {response: "Done"}
    }
    else if(reducingInventoryRequest.message === "Cancelled") {
        if(inventories.length != reducingInventoryRequest.variantId.length){
            return {
                response: "variantId doesnot exist"
            }
        }
        for(let i=0 ; i<inventories.length ; i++){
            inventories[i].reservedInventory += reducingInventoryRequest.quantity[i]
            await inventories[i].save()
        }
        return {response: "Done"}

    }
    else {
        return {
            response : "ERROR"
        }
    }
} 

module.exports = {
    getInventoryInfo,
    reducingResInventory,
    reducingInventory
}