import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getPlayerInfo = async (req, res) => {
    const user = req.user
    try {
        const userdata = await prisma.user.findUnique({
            where: { id: Number(user.id) },
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
        console.log(userdata)

        return res.status(201).json({
            msg: 'User information successfully fetched!',
            data: userdata,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
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

export { getPlayerInfo, getAllUsers }
