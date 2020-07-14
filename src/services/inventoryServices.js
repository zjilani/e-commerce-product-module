const Inventory = require("../models/Inventory")

const getInventoryInfo = async (fastify,getInventoryInfoRequest)=>{
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
    const inventory = await Inventory.findOneAndUpdate({variantId:reducingResInventoryRequest.variantId}, 
                                                 {$inc : { reservedInventory: -reducingResInventoryRequest.quantity} })
    if(!inventory){
        return {
            response: "variantId doesnot exist"
        }
    }
    return inventory
}

const reducingInventory = async (fastify,reducingInventoryRequest)=>{
    if(reducingInventoryRequest.message === "Success"){
        const inventory = await Inventory.findOneAndUpdate({variantId:reducingInventoryRequest.variantId},
                                                {$inc : { inventory: -reducingInventoryRequest.quantity} })
        if(!inventory){
            return {
                response: "variantId doesnot exist"
            }
        }
        return inventory
    }
    else if(reducingInventoryRequest.message === "Cancelled") {
        const inventory = await Inventory.findOneAndUpdate({variantId:reducingInventoryRequest.variantId},
            {$inc : { reservedInventory: reducingInventoryRequest.quantity} })
        if(!inventory){
            return {
                response: "variantId doesnot exist"
            }
        }
        return inventory

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