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

const getInventory = async (req, res) => {
    const user = req.user
    try {
        const userdata = await prisma.account.findUnique({
            where: { id: Number(user.id) },
            select: {
                inventory: true,
            },
        })
        console.log(userdata)

        return res.status(201).json({
            msg: 'User inventory successfully fetched!',
            data: userdata,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
};

const addItemToInventory = async (req, res) => {
    const user = req.user;
    const { itemId } = req.body;

    try {
        // Check if the item exists
        const item = await prisma.item.findUnique({
            where: { id: Number(itemId) }
        });

        if (!item) {
            return res.status(404).json({
                msg: 'Item not found!',
            });
        }

        // Check if the item is already in the user's inventory
        const existingInventoryItem = await prisma.inventoryItem.findFirst({
            where: {
                inventory: {
                    userId: Number(user.id),
                },
                itemId: Number(itemId)
            }
        });

        if (existingInventoryItem) {
            // Optionally update quantity if it's a stackable item
            const updatedItem = await prisma.inventoryItem.update({
                where: { id: existingInventoryItem.id },
                data: { quantity: existingInventoryItem.quantity + 1 }
            });
            return res.status(200).json({
                msg: 'Item quantity updated in inventory!',
                data: updatedItem,
            });
        }

        // Add new item to the inventory
        const inventoryItem = await prisma.inventoryItem.create({
            data: {
                inventory: {
                    connect: { userId: Number(user.id) }
                },
                item: {
                    connect: { id: Number(itemId) }
                },
                quantity: 1 // Initialize quantity to 1
            }
        });

        return res.status(201).json({
            msg: 'Item successfully added to inventory!',
            data: inventoryItem,
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};


export { getPlayerInfo, getInventory, addItemToInventory };
