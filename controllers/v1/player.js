import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getPlayerInfo = async (req, res) => {
    const user = req.user
    try {
        const userdata = await prisma.account.findUnique({
            where: { id: Number(user.id) },
            select: {
                id: true,
                username: true,
                currency: true,
                menagerie: {
                    select: {
                        monster: {
                            select: {
                                id: true,
                                capturedAt: true, // Include the capturedAt field from menagerie
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
                inventory: {},
                shopItems: {
                    select: {
                        id: true,
                        price: true,
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
            data: userdata,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

export { getPlayerInfo }
