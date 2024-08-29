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

export const transferMonster = (buyerId, monsterId) => {
    return prisma.menagerie.create({
        data: {
            userId: buyerId,
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

export const removeMonsterFromSeller = (sellerId, monsterId) => {
    return prisma.menagerie.deleteMany({
        where: {
            userId: sellerId,
            monsterId: monsterId,
        },
    });
};

export const removeItemFromShop = (itemId) => {
    return prisma.shop.delete({
        where: { id: itemId },
    });
};