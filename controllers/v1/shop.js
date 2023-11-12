import { v4 as uuidv4 } from 'uuid'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const purchaseMonster = async (req, res) => {
    const { id } = req.params;
    const user = req.user;

    try {
        // Find the monster in the shop
        const shopItem = await prisma.shop.findUnique({
            where: { id },
            include: { monster: true }, // Include monster details in the response
        });

        // Check if the user has enough money
        const buyer = await prisma.account.findUnique({
            where: { id: user.id },
            select: { id: true, currency: true },
        });

        if (buyer.currency < shopItem.price) {
            return res.status(403).json({
                msg: 'You do not have enough money!',
            });
        }

        // Start a Prisma transaction to ensure atomicity
        await prisma.$transaction([
            // Deduct money from the buyer
            prisma.account.update({
                where: { id: buyer.id },
                data: { currency: { decrement: shopItem.price } },
            }),

            // Update the seller's balance
            prisma.account.update({
                where: { id: shopItem.playerId },
                data: { currency: { increment: shopItem.price } },
            }),

            // Transfer the monster from seller to buyer
            prisma.inventory.create({
                data: {
                    userId: buyer.id,
                    monsterId: shopItem.monster.id,
                },
            }),

            // Update the monster's status to 'In_Inventory'
            prisma.monster.update({
                where: { id: shopItem.monster.id },
                data: { status: 'In_Inventory' },
            }),

            // Remove the monster from the seller's inventory
            prisma.inventory.deleteMany({
                where: {
                    userId: shopItem.playerId,
                    monsterId: shopItem.monster.id,
                },
            }),

            // Remove item from the shop
            prisma.shop.delete({ where: { id } }),
        ]);

        return res.status(200).json({
            msg: 'Monster purchased successfully',
            data: {
                purchasedMonster: shopItem.monster,
            },
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};

const sellMonster = async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    const { price } = req.body

    try {
        const shopItem = await prisma.shop.create({
            data: {
                id: uuidv4(),
                monsterId: id,
                playerId: user.id,
                price: price,
            },
        });

        await prisma.monster.update({
            where: { id: id},
            data: {
                status: 'On_Market'
            }
        })

        return res.status(200).json({
            msg: 'Monster listed successfully',
            data: {
                listedMonster: shopItem.data,
            },
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};

const getShop = async (req, res) => {
    const { page = 1, pageSize = 10, type, species, rarity } = req.query

    const skip = (page - 1) * pageSize

    try {
        const filterOptions = {
            monster: {},
        }

        if (type) {
            filterOptions.monster.type = { contains: type }
        }

        if (species) {
            filterOptions.monster.species = { contains: species }
        }

        if (rarity) {
            filterOptions.monster.rarity = { contains: rarity }
        }

        const shopItems = await prisma.shop.findMany({
            take: pageSize,
            skip,
            where: filterOptions,
            include: {
                player: {
                    select: {
                        username: true,
                    },
                },
                monster: true,
            },
        })

        const totalItems = await prisma.shop.count({
            where: filterOptions,
        })

        const totalPages = Math.ceil(totalItems / pageSize)

        return res.status(200).json({
            msg: 'Shop items retrieved successfully',
            data: {
                shopItems,
                totalPages,
                currentPage: page,
            },
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

export { purchaseMonster, getShop, sellMonster }
