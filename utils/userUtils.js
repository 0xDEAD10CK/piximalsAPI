import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Get User Account
export const getUserAccount = async (userId) => {
};

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

// Get Inventory
export const getInventory = async (userId) => {
    return await prisma.account.findUnique({
        where: { id: Number(userId) },
        select: {
            inventory: {
                select: {
                    items: {
                        select: {
                            id: true,
                            quantity: true,
                            item: { // Accessing the related item model
                                select: {
                                    id: true,
                                    name: true,
                                    effects: true,
                                    buyPrice: true,
                                    sellPrice: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });
};

export const getMenagerie = async (userId) => {
    return await prisma.account.findUnique({
        where: { id: Number(userId) },
        select: {
            menagerie: {
                select: {
                    monster: {
                        select: {
                            id: true,
                            name: true,
                            rarity: true,
                            type: true,
                            species: true,
                            hp: true,
                            ap: true,
                            status: true,
                            url: true,
                        },
                    },
                },
            },
        },
    });
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