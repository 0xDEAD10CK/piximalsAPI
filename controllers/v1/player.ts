import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { 
    checkInventory,
    createInventory,
    getInventory,
    getMenagerie,
    checkItemInInventory,
    updateInventoryItem,
    createInventoryItem,
    changePlayerLocation
 } from '../../utils/userUtils.js'

import { checkItem } from '../../utils/itemUtils.js'
import { updateMonsterStatus } from '../../utils/monsters.js'
import { Response, Request } from 'express'
import { isAuthenticated } from '../../utils/isAuthenticated.js'

const getPlayerInfo = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)){
        res.status(401).json({ msg: "Unauthorized"})
        return 
    }

    const user = req.user
    try {
        const userdata = await prisma.account.findUnique({
            where: { id: Number(user.id) },
            select: {
                id: true,
                username: true,
                currency: true,
                role: true,
                level: true,
                experience: true,
                health: true,
                location: true,
            },
        })

        res.status(201).json({
            msg: 'User information successfully fetched!',
            data: userdata,
        })
        return 
    } catch (err: any) {
        res.status(500).json({
            msg: err.message,
        })
        return 
    }
}

const getUserInventory = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)){
        res.status(401).json({ msg: "Unauthorized"})
        return 
    }

    const user = req.user;
    try {
        const userdata = await getInventory(user.id);

        if (!userdata || !userdata.inventory) {
            res.status(404).json({
                msg: 'Inventory not found!',
            });
            return 
        }

        res.status(200).json({
            msg: 'User inventory successfully fetched!',
            data: userdata,
        });
        return 
    } catch (err: any) {
        res.status(500).json({
            msg: err.message,
        });
        return 
    }
};

const getUserMenagerie = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)){
        res.status(401).json({ msg: "Unauthorized"})
        return 
    }
    const user = req.user;
    try {
        const userdata = await prisma.account.findUnique({
            where: { id: user.id },
            select: {
                menagerie: {
                    select: {
                        monster: {
                            select: {
                                id: true,
                                name: true,
                                type: true,
                                status: true,
                                species: true,
                                rarity: true,
                                url: true,
                                abilities: true,
                                hp: true,
                                ap: true,
                            },
                        },
                    },
                },
            },
        });

        res.status(200).json({
            msg: 'User menagerie successfully fetched!',
            data: userdata,
        });
        return 
    } catch (err: any) {
        res.status(500).json({
            msg: err.message,
        });
        return 
    }
};

const addItemToInventory = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)){
        res.status(401).json({ msg: "Unauthorized"})
        return 
    }
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
            res.status(404).json({
                msg: 'Item not found!',
            });
            return 
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

        res.status(201).json({
            msg: 'Item successfully added to inventory!',
            data: updatedInventoryItem,
        });
        return 
    } catch (err: any) {
        res.status(500).json({
            msg: err.message,
        });
        return 
    }
};

const moveMonsterToParty = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)){
        res.status(401).json({ msg: "Unauthorized"})
        return 
    }
    const user = req.user;
    const { monsterId } = req.params;

    try {
        // Check how many monsters in menagerie have status 'IN_PARTY'
        const menagerie = await getMenagerie(user.id);

        if (!menagerie) {
            res.status(404).json({
                msg: 'Menagerie not found',
            });
            return 
        }

        // Extract the monsters from the menagerie records
        const monsters = menagerie.menagerie.map(record => record.monster);

        // Count the number of monsters in the party
        const partyCount = monsters.filter(monster => monster.status === 'IN_PARTY').length;
        
        if (partyCount >= 3) {
            res.status(403).json({
                msg: 'Party is full!',
            });
            return 
        } else {
            await updateMonsterStatus(monsterId, 'IN_PARTY');

            res.status(201).json({
                msg: 'Monster successfully moved to party!',
            });
            return 
        }
    } catch (err: any) {
        res.status(500).json({
            msg: err.message,
        });
        return 
    }
};

const moveMonsterFromParty = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)){
        res.status(401).json({ msg: "Unauthorized"})
        return 
    }
    const user = req.user;
    const { monsterId } = req.params;

    try {
        // Check if the monster exists
        await updateMonsterStatus(monsterId, 'IN_MENAGERIE');

        res.status(201).json({
            msg: 'Monster successfully moved from party!',
        });
        return 
    } catch (err: any) {
        res.status(500).json({
            msg: err.message,
        });
        return 
    }
};

const changeLocation = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)){
        res.status(401).json({ msg: "Unauthorized"})
        return 
    }
    const user = req.user;
    const { locationId } = req.body;

    await changePlayerLocation(user.id, locationId);

    res.status(200).json({
        msg: 'Location updated successfully',
    });
    return 
}

export { getPlayerInfo, getUserMenagerie, addItemToInventory, getUserInventory, moveMonsterToParty, moveMonsterFromParty, changeLocation };

