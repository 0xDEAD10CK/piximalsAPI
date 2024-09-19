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
import { generateMonster, addMonsterToMenagerie } from '../../utils/monsters.js';
import { cleanUpZone, findZone, generateZone } from '../../utils/zoning.js';
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
        const { monsterAmount } = req.body
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


const deleteZone = async (req, res) => {
    try {
        const { zoneid } = req.params


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

    // Generate a monster
    const monster = await generateMonster(player.location.type)
    const items = []
    
    // Generate a random amount of items
    for (let i = 0; i < getRandomInt(2, 5); i++){
        items.push(await randomItem(player.location))
    }

    console.log(items)
    // Add the monster and items to the zone
    const updatedZone = await prisma.zone.update({
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

    console.log(updatedZone)

    // return the monster to the user
    return res.status(200).json({msg: "Monster found", monster: monster, zone: updatedZone})

    } catch (error) {
        return res.status(500).json({msg: error})
    }
    
}
export { zoneGeneration, goToZone, deleteZone, zoneInfo, collect, search }