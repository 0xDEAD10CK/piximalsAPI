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
import { generateMonster } from '../../utils/monsters.js';
import { cleanUpZone, generateZone } from '../../utils/zoning.js';
import { randomItem } from '../../utils/items.js';
import { addMonsterToMenagerie } from '../../utils/accountBalance.js';
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
        
        for (let i = 0; i < monsterAmount; i++){
            monsters.push(generateMonster(player.location.type))
            items.push(randomItem(player.location))
        }

        monsters = await Promise.all(monsters);
        items = await Promise.all(items);
        
        if (monsters.length < 1) return res.status(404).json({msg: "No monsters found"})
        
        const zone = await generateZone("Dangerzone", monsters, player.location.type, user, "This is a dangerous zone", items)

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
        const { monsterId } = req.body

        const zone = await prisma.zone.findUnique({
            where: {
                id: zoneid
            },
            select: {
                monsters: true
            }
        })

        if (!zone){
            return res.status(404).json({msg: "Zone does not exist"})
        }

        const player = await prisma.account.findUnique({
            where: {
                id: user.id
            }
        }) 

        if (!player){
            return res.status(404).json({msg: "Player can not be found"})
        }

        const response = await addMonsterToMenagerie(user.id, monsterId)


        return res.status(200).json({msg: response})
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

export { zoneGeneration, goToZone, deleteZone, collect }