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