import { v4 as uuidv4 } from 'uuid'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const viewBalance = () => {
    return
}

// Deduct balance from account
export const deductBalance = (id: number, cost: number) => {
    return prisma.account.update({
        where: { id: id },
        data: { currency: { decrement: cost } },
    });
};

// Update balance in account
export const updateBalance = (id: number, amount: number) => {
    return prisma.account.update({
        where: { id: id },
        data: { currency: { increment: amount } },
    });
};

// Add a monster to the menagerie
export const addMonsterToMenagerie = (id: number, monsterId: string) => {
    return prisma.menagerie.create({
        data: {
            userId: id,
            monsterId: monsterId,
        },
    });
};

// Remove a monster from the menagerie
export const removeMonsterFromMenagerie = (id: number, monsterId: string) => {
    return prisma.menagerie.deleteMany({
        where: {
            userId: id,
            monsterId: monsterId,
        },
    });
};

// Update monster status
export const updateMonsterStatus = async (userId: number, monsterId: string, status: string) => {
    // Find the menagerie record for the user that contains the monster
    await prisma.menagerie.findUnique({
        where: { id: userId },
        include: { monster: true } // Fetch the related monster
    });

    // Update the monster's status
    return prisma.monster.update({
        where: { id: monsterId },
        data: { status: status },
    });
};

// Remove listing from shop
export const removeListingFromShop = (itemId: string) => {
    return prisma.shop.delete({
        where: { id: itemId },
    });
};

// Fetch monster by ID
export const findMonsterById = (id: string) => {
    return prisma.monster.findUnique({
        where: { id: id },
    });
};

// Create a shop listing for the monster
export const createShopListing = (monsterId: string, playerId: number, price: number) => {
    return prisma.shop.create({
        data: {
            id: uuidv4(),
            monsterId: monsterId,
            playerId: playerId,
            price: price,
        },
    });
};

export const findPlayer = async (userId: number) => {
    const player = await prisma.account.findUnique({
        where: {
            id: userId
        }
    }) 

    // To be fixed
    // if (!player){
    //     return res.status(404).json({msg: "Player can not be found"})
    // }

    return player
}

