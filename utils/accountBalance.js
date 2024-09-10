import { v4 as uuidv4 } from 'uuid'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const viewBalance = () => {
    return
}

// Deduct balance from account
export const deductBalance = (id, cost) => {
    return prisma.account.update({
        where: { id: id },
        data: { currency: { decrement: cost } },
    });
};

// Update balance in account
export const updateBalance = (id, amount) => {
    return prisma.account.update({
        where: { id: id },
        data: { currency: { increment: amount } },
    });
};

// Add a monster to the menagerie
export const addMonsterToMenagerie = (id, monsterId) => {
    return prisma.menagerie.create({
        data: {
            userId: id,
            monsterId: monsterId,
        },
    });
};

// Remove a monster from the menagerie
export const removeMonsterFromMenagerie = (id, monsterId) => {
    return prisma.menagerie.deleteMany({
        where: {
            userId: id,
            monsterId: monsterId,
        },
    });
};

// Update monster status
export const updateMonsterStatus = (monsterId, status) => {
    return prisma.monster.update({
        where: { id: monsterId },
        data: { status: status },
    });
};

// Remove listing from shop
export const removeListingFromShop = (itemId) => {
    return prisma.shop.delete({
        where: { id: itemId },
    });
};

// Fetch monster by ID
export const findMonsterById = (id) => {
    return prisma.monster.findUnique({
        where: { id: id },
    });
};

// Create a shop listing for the monster
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
