import { v4 as uuidv4 } from 'uuid'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const viewBalance = () => {
    return
}

export const deductBalance = (id, cost) => {
    return prisma.account.update({
        where: { id: id },
        data: { currency: { decrement: cost } },
    });
};

export const updateBalance = (id, amount) => {
    return prisma.account.update({
        where: { id: id },
        data: { currency: { increment: amount } },
    });
};

export const addMonsterToMenagerie = (id, monsterId) => {
    return prisma.menagerie.create({
        data: {
            userId: id,
            monsterId: monsterId,
        },
    });
};

export const removeMonsterFromMenagerie = (id, monsterId) => {
    return prisma.menagerie.deleteMany({
        where: {
            userId: id,
            monsterId: monsterId,
        },
    });
};

export const updateMonsterStatus = (monsterId, status) => {
    return prisma.monster.update({
        where: { id: monsterId },
        data: { status: status },
    });
};

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

// Create a shop item for the monster
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

export const findPlayer = async (userId) => {
    const player = await prisma.account.findUnique({
        where: {
            id: userId
        }
    }) 

    if (!player){
        return res.status(404).json({msg: "Player can not be found"})
    }

    return player
}