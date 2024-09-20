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
import { updateMonsterStatus } from '../../utils/monsters.js'

const getPlayerInfo = async (req, res) => {
    const user = req.user
    try {
        const userdata = await prisma.account.findUnique({
            where: { id: Number(user.id) },
            select: {
                id: true,
                username: true,
                currency: true,
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

const getMenagerie = async (req, res) => {
    const user = req.user;
    try {
        const userdata = await prisma.account.findUnique({
            where: { id: user.id },
            select: {
                menagerie: {
                    select: {
                        monster: true, // This will fetch all fields from 'monster'
                    },
                },
            },
        });

        return res.status(200).json({
            msg: 'User menagerie successfully fetched!',
            data: userdata,
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }};



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

const changePartyStatus = async (req, res) => {
    const user = req.user;
    const { id, status } = req.body;

    // Update monster status in menagerie
    try {
        await updateMonsterStatus(id, status);

        return res.status(200).json({
            msg: 'Monster status updated successfully',
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};


export { getPlayerInfo, getInventory, addItemToInventory, getMenagerie, changePartyStatus };
