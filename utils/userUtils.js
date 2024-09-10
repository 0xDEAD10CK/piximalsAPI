import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Check if the user has an inventory
export const checkInventory = async (userId) => {
    return await prisma.inventory.findFirst({
        where: { userId },
    });
};

// Create an inventory for the user
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

// Check if the item exists in the user's inventory
export const checkItemInInventory = async (inventoryId, itemId) => {
    return await prisma.inventoryItem.findFirst({
        where: {
            inventoryId: inventoryId,
            itemId: itemId,
        },
    });
}

// Update the item in the user's inventory if it exists
export const updateInventoryItem = async (existingInventoryItem, quantity) => {
    console.log(existingInventoryItem, quantity);
    return await prisma.inventoryItem.update({
        where: { id: existingInventoryItem.id },
        data: {
            quantity: existingInventoryItem.quantity + quantity,  // Increment by desired amount
        }
    });
};

// Create an item in the user's inventory if it doesn't exist
export const createInventoryItem = async (inventoryId, itemId, quantity) => {
    console.log(inventoryId, itemId, quantity);
    
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