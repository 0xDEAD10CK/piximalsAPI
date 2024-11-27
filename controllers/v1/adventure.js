/**
 * @file adventure.js
 * @description This file contains controller functions for completing actions such as:
 * - Generating a new zone
 * - Moving to a zone
 * Planned features:
 * - Deleting a zone
 * 
 * @module controllers/v1/adventure
 */

import { PrismaClient } from '@prisma/client'
import { generateMonster, addMonsterToMenagerie, updateMonsterStatus, updateMonsterInZoneStatus } from '../../utils/monsters.js';
import { cleanUpZone, findMonsterInZone, findZone, generateZone } from '../../utils/zoning.js';
import { randomItem } from '../../utils/items.js';
import { findPlayer } from '../../utils/accountBalance.js';
import { addToInventory } from '../../utils/itemUtils.js';
import { getRandomInt } from '../../utils/utils.js';
const prisma = new PrismaClient()


/**
 * This function will generate a new zone with a specified amount of monsters and items
 */
const zoneGeneration = async (req, res) => {
    try {
        const user = req.user;
        let monsters = []
        let items = []
        
        const player = await prisma.account.findUnique({
            where: {
                id: user.id
            },
            select: {
                location: {
                    select: {
                        id: true,
                        type: true,
                        rarity: true
                    }
                }
            }
        })
        
        //console.log(monsters)   
        
        const zone = await generateZone("Dangerzone", player.location.type, user, "This is a dangerous zone")
        
        console.log(zone)

        return res.status(200).json({msg: "Welcome to the Dangerzone", zone: zone})
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

const goToZone = async (req, res) => {
    try {
        const { zoneid } = req.params
        const user = req.user;
        
        const zone = await prisma.zone.findUnique({
            where: {
                id: zoneid
            }
        })

        if (!zone) return res.status(404).json({msg: "Zone not found"})

        const moveZone = await prisma.zone.update({
            where: {
                id: zoneid
            },
            data: {
                players: {
                    connect: {id: user.id}
                }
            }
        })

        if (!moveZone) return res.status(500).json({msg: "Failed to move to zone"})

        return res.status(200).json({msg: "Welcome to the Dangerzone", zone: moveZone})
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

const collect = async (req, res) => {
    try {
        const { zoneid } = req.params
        const user = req.user;
        const { monsterId, itemId } = req.body
        let data = []

        await findZone(zoneid)
        await findPlayer(user.id)

        if (monsterId){
            const monsterResponse = await addMonsterToMenagerie(user.id, monsterId)
            data.push(monsterResponse)
        }

        if (itemId){
            const itemResponse = await addToInventory(user.id, itemId, 1)
            data.push(itemResponse) 
        }

        return res.status(200).json({msg: "Added to inventory", data: data})
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

//
//  FOR THE MEAN TIME I AM ADJUSTING THE DELETE ZONE FUNCTION TO ACT AS IF EACH ZONE IS
//  A SINGLE PLAYER ZONE. THIS WILL BE CHANGED IN THE FUTURE TO ALLOW FOR ZONES TO BE
//  MULTIPLAYER ZONES
//
const leaveZone = async (req, res) => {
    try {
        const { zoneid } = req.params
        const user = req.user;

        const zone = await findZone(zoneid);
        if (!zone) return res.status(404).json({msg: "Zone not found"})

        // For each monster in zone, if the status is CAUGHT, add to menagerie.
        const monsters = zone.monsters;
        const monsterPromises = monsters.filter(monster => monster.status === "CAUGHT").map(async monster => {
            // Update the status to 'IN_MENAGERIE'
            await updateMonsterInZoneStatus(zoneid, monster.id, "In_Menagerie");

            // Add the monster to the menagerie
            return await addMonsterToMenagerie(user.id, monster.id);
        });

        // Wait for all monsters to be added to menagerie
        await Promise.all(monsterPromises);

        // Add all items to inventory
        const items = zone.items;
        const itemPromises = items.map(item => addToInventory(user.id, item.id, 1));

        // Wait for all items to be added to inventory
        await Promise.all(itemPromises);

        // Clean up the zone
        const response = await cleanUpZone(zoneid)

        return res.status(200).json({msg: "Zone Deleted"})
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

const zoneInfo = async (req, res) => {
    try {
        const { zoneid } = req.params
        const zone = await findZone(zoneid);

        return res.status(200).json({msg: "Zone found", zone: zone})
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

const returnBattleResults = async (req, res) => {
    try {
        const user = req.user;
        const { zoneId, monsterId, result } = req.body;

        const monster = await findMonsterInZone(zoneId, monsterId);

        if (!monster) return res.status(404).json({msg: "Monster not found"})

        if (result === "CAUGHT"){
            await updateMonsterStatus(monsterId, "CAUGHT")

            return res.status(200).json({msg: "Monster caught"})
        }
        
        if (result === "DEAD"){
            await deleteMonster(monsterId);

            return res.status(200).json({msg: "Monster defeated"})
        }

    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

const setAllMonsterStatusCaught = async (req, res) => {
    try {
        const { zoneId } = req.params;
        
        // Find the zone and include its monsters
        const zone = await prisma.zone.findUnique({
            where: { id: zoneId },
            include: { monsters: true }
        });

        // If the zone doesn't exist, return 404
        if (!zone) return res.status(404).json({ msg: "Zone not found" });

        const monsters = zone.monsters;

        // Loop through all monsters and update their status
        const updatePromises = monsters.map(monster =>
            prisma.monster.update({
                where: { id: monster.id },
                data: { status: "CAUGHT" }
            })
        );

        // Wait for all monsters to be updated
        await Promise.all(updatePromises);

        // Optionally refetch the zone with updated monster statuses
        const updatedZone = await prisma.zone.findUnique({
            where: { id: zoneId },
            include: { monsters: true }
        });

        // Return the updated zone with all monsters caught
        return res.status(200).json({ msg: "All monsters caught", zone: updatedZone });

    } catch (error) {
        // Handle any errors
        return res.status(500).json({ msg: error.message });
    }
};

const search = async (req, res) => {
    // Take Zone ID from params
    // Get user ID from req.user
    // Get Zone from Zone ID
    // Generate a set of random items
    // Generate a random monster
    // append both generated data to the zone
    // return the monster for the user to fight in the front end application.

    const { zoneid } = req.params
    const user = req.user;
    let monster;
    let updatedZone;

    try {
            // Get the player's location
        const player = await prisma.account.findUnique({
            where: {
                id: user.id
            },
            select: {
                location: {
                    select: {
                        id: true,
                        type: true,
                        rarity: true
                    }
                }
            }
        })

        // Get the zone
        const zone = await prisma.zone.findUnique({
            where: {
                id: zoneid
            }
        })

        // Check if the zone exists
        if (!zone) return res.status(404).json({msg: "Zone not found"})

        console.log("test - found zone")

        // Generate a monster
        try {
            monster = await generateMonster(player.location.type)
        } catch (error) {
            console.log(error)
        }

        console.log("test - monster generated")

        const items = []

        console.log(monster)
        
        // Generate a random amount of items
        for (let i = 0; i < getRandomInt(2, 5); i++){
            items.push(await randomItem(player.location))
        }

        console.log("test - items generated")

        // Add the monster and items to the zone
        try {
            updatedZone = await prisma.zone.update({
                where: {
                    id: zoneid
                },
                data: {
                    monsters: {
                        connect: {id: monster.id}
                    },
                    items: {
                        connect: items.map(item => {return {id: item.id}})
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }

        console.log("test - monster and items added to zone")

        // return the monster to the user
        return res.status(200).json({msg: "Monster found", monster: monster, zone: zone})

    } catch (error) {
        return res.status(500).json({msg: error})
    }
    
}
export { zoneGeneration, goToZone, leaveZone, zoneInfo, collect, search, setAllMonsterStatusCaught, returnBattleResults }