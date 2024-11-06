import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Gets a users inventory
 * 
 * @param {string} userId - Will take a userid
 * @returns finds an inventory belonging to a user
 */
export const checkInventory = async (userId) => {
    return await prisma.inventory.findFirst({
        where: { userId },
    });
};

/**
 * Creates an inventory for a user
 * 
 * @param {string} userId - Will take a userid
 * @returns creates an inventory and connects to the userid
 */
export const createInventory = async (userId) => {
    return await prisma.inventory.create({
            data: {
                user: {
                    connect: { id: userId }
                }
            }
        }
    );
};

/**
 * 
 * @param {Int} inventoryId - The id of an inventory
 * @param {Int} itemId - Id of an item to be found in the above inventory
 * @returns inventory object
 */
export const checkItemInInventory = async (inventoryId, itemId) => {
    return await prisma.inventoryItem.findFirst({
        where: {
            inventoryId: inventoryId,
            itemId: itemId,
        },
    });
}

/**
 * 
 * @param {InventoryItem} existingInventoryItem 
 * @param {Int} quantity 
 * @returns updates the quanitity of the item in the inventory
 */
export const updateInventoryItem = async (existingInventoryItem, quantity) => {
    return await prisma.inventoryItem.update({
        where: { id: existingInventoryItem.id },
        data: {
            quantity: existingInventoryItem.quantity + quantity,  // Increment by desired amount
        }
    });
};

// Create an item in the user's inventory if it doesn't exist
export const createInventoryItem = async (inventoryId, itemId, quantity) => {    
    await prisma.inventoryItem.create({
        data: {
            inventory: {
                connect: { id: inventoryId },  // Use the fetched inventory ID
            },
            item: {
                connect: { id: itemId },
            },
            quantity: quantity,  // Starting quantity
        },
    });
};

export const getUserAccount = async (id) => {
    const response = await prisma.account.findUnique({
        where: { id: id}
    })

    return response
}

export const collectedStarter = async (id) => {
    const response = await prisma.account.update({
        where: { id: id},
        data: {
            starter: true,
        }
    })

    return response
}