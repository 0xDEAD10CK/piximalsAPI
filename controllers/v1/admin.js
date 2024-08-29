import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.account.findMany({
            select: {
                id: true,
                username: true,
                currency: true,
                inventory: {
                    select: {
                        // other fields from the inventory you want to include
                        monster: {
                            select: {
                                id: true,
                                type: true,
                                status: true,
                                species: true,
                                rarity: true,
                                name: true,
                                url: true,
                                hp: true,
                                ap: true,
                                // other fields from the monster you want to include
                            },
                        },
                    },
                },
                // other fields you want to include
            },
        })

        return res.status(201).json({
            msg: 'User information successfully fetched!',
            data: users,
        })
    } catch (error) {}
}

export { getAllUsers }