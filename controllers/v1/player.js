import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { 
    checkInventory,
    createInventory,
    checkItemInInventory,
    updateInventoryItem,
    createInventoryItem
 } from '../../utils/userUtils.js'

 import { checkItem } from '../../utils/itemUtils.js'
import { check } from 'prettier'

const getPlayerInfo = async (req, res) => {
    const user = req.user
    try {
        const userdata = await prisma.account.findUnique({
            where: { id: Number(user.id) },
            select: {
                id: true,
                username: true,
                currency: true,
<<<<<<< HEAD
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
                zone: {
                    select: {
                        id: true,
                        zonename: true,
                        type: true,
                        monsters: {
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
                
=======
>>>>>>> origin/staging
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

const getInventory = async (req, res) => {
    const user = req.user;
    try {
        const userdata = await prisma.account.findUnique({
            where: { id: Number(user.id) },
            select: {
                inventory: {
                    select: {
                        items: {
                            select: {
                                id: true,
                                quantity: true,
                                item: { // Accessing the related item model
                                    select: {
                                        id: true,
                                        name: true,
                                        effects: true,
                                        buyPrice: true,
                                        sellPrice: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        // If the user's inventory or items are not found, handle the response accordingly
        if (!userdata || !userdata.inventory) {
            return res.status(404).json({
                msg: 'Inventory not found!',
            });
        }

        return res.status(200).json({
            msg: 'User inventory successfully fetched!',
            data: userdata,
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};



const addItemToInventory = async (req, res) => {
    const user = req.user;
    const { itemId, quantity } = req.body;

    try {
        // Check if the user has an inventory
        let inventory = await checkInventory(user.id)

        // Create an inventory if it doesn't exist
        if (!inventory) {
            inventory = await createInventory(user.id)
        }

        // Check if the item exists
        const item = await checkItem(itemId)

        if (!item) {
            return res.status(404).json({
                msg: 'Item not found!',
            });
        }

        // Check if the item is already in the user's inventory
        const existingInventoryItem = await checkItemInInventory(inventory.id, item.id)

        let updatedInventoryItem;

        if (existingInventoryItem) {
            // Item exists, update the quantity
            updatedInventoryItem = await updateInventoryItem(existingInventoryItem, quantity)
        } else {
            // Item does not exist, create a new entry
            updatedInventoryItem = await createInventoryItem(inventory.id, item.id, quantity)
        }

        return res.status(201).json({
            msg: 'Item successfully added to inventory!',
            data: updatedInventoryItem,
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};



export { getPlayerInfo, getInventory, addItemToInventory };
