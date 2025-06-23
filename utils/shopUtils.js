import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid'
const prisma = new PrismaClient();

// Sell an item from the user's inventory
/**
 * 
 * @param {string} userId 
 * @param {int} itemId 
 * @param {int} quantity 
 * @returns creates listing to sell an item from your inventory
 */
export const sellInventoryItem = async (userId, itemId, quantity) => {
    const user = await prisma.account.findUnique({
        where: { id: userId },
        select: {
            currency: true,
            inventory: {
                select: {
                    id: true,
                    items: {
                        select: {
                            id: true,
                            quantity: true,
                            item: {
                                select: {
                                    id: true,
                                    sellPrice: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });

    const item = user.inventory.items.find((item) => item.item.id === itemId);

    if (!item) {
        return { msg: "Item not found in inventory" };
    }

    if (item.quantity < quantity) {
        return { msg: "Not enough items to sell" };
    }

    const sellPrice = item.item.sellPrice * quantity;

    const updatedItem = await prisma.inventoryItem.update({
        where: { id: item.id },
        data: {
            quantity: item.quantity - quantity,
        },
    });

    if (updatedItem.quantity === 0) {
        await prisma.inventoryItem.delete({
            where: { id: item.id },
        });
    }

    const newBalance = await prisma.account.update({
        where: { id: userId },
        data: {
            currency: {increment: sellPrice}
        },
        select: {
            currency: true, // Select only the currency field
        },
    });

    return { msg: "Item sold successfully", data: newBalance};
};

/**
 * 
 * @param {int} itemId 
 * @returns delete listing from shop
 */
export const removeListingFromShop = (itemId) => {
    return prisma.shop.delete({
        where: { id: itemId },
    });
};

/**
 * 
 * @param {string} monsterId 
 * @param {int} playerId 
 * @param {int} price 
 * @returns 
 */
export const createShopListing = (monsterId, playerId, price) => {
    return prisma.shop.create({
        data: {
            id: uuidv4(),
            monsterId: monsterId,
            playerId: playerId,
            price: price,
        },
    });
};