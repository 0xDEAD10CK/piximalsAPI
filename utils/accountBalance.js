import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const viewBalance = () => {
    return
}

export const deductBalance = (id, cost) => {
    prisma.account.update({
        where: { id: id },
        data: { currency: { decrement: cost } },
    })
}