import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Gets a users inventory
 * 
 * @param {string} userId - Will take a userid
 * @returns finds an inventory belonging to a user
 */
export const checkInventory = async (userId: number) => {
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
export const createInventory = async (userId: number) => {
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
export const getInventory = async (userId: number) => {
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

export const getMenagerie = async (userId: number) => {
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

/**
 * 
 * @param {Int} inventoryId - The id of an inventory
 * @param {Int} itemId - Id of an item to be found in the above inventory
 * @returns inventory object
 */
export const checkItemInInventory = async (inventoryId: number, itemId: number) => {
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
export const updateInventoryItem = async (existingInventoryItem:any, quantity:number) => {
    return await prisma.inventoryItem.update({
        where: { id: existingInventoryItem.id },
        data: {
            quantity: existingInventoryItem.quantity + quantity,  // Increment by desired amount
        }
    });
};

// Create an item in the user's inventory if it doesn't exist
export const createInventoryItem = async (inventoryId: number, itemId: number, quantity: number) => {    
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

export const getUserAccount = async (id: number) => {
    const response = await prisma.account.findUnique({
        where: { id: id}
    })

    return response
}

export const collectedStarter = async (id: number) => {
    const response = await prisma.account.update({
        where: { id: id},
        data: {
            starter: true,
        }
    })

    return response
}

export const changePlayerLocation = async (userId: number, locationId: number) => {
    return await prisma.account.update({
        where: { id: userId },
        data: {
            location: {
                connect: { id: locationId }  // Connects the account to the new location using its ID
            }
        }
    });
};
