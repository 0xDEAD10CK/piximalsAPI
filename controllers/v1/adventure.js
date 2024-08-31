import { PrismaClient } from '@prisma/client'
import { generateMonster } from '../../utils/monsters.js';
import { generateZone } from '../../utils/zoning.js';
const prisma = new PrismaClient()

const adventureLocation = (req, res) => {
    try {
        const { zone } = req.params
        const user = req.user;

        return res.status(200).json({msg: "Welcome to the Dangerzone"})
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

/**
 * Generates a new zone with a specified amount of monsters.
 * This will also include items later on
 * This will generate when a player decides to explore at a location
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The generated zone.
 * 
 * @example POST /api/v1/adventure/zone
 * 
 **/
const zoneGeneration = async (req, res) => {
    try {
        const { type, monsterAmount } = req.body
        const user = req.user;
        let monsters = []

        for (let i = 0; i < monsterAmount; i++){
            monsters.push(generateMonster(type))
        }

        monsters = await Promise.all(monsters);
        
        if (monsters.length < 1) return res.status(404).json({msg: "No monsters found"})
                    
        const zone = await generateZone("Dangerzone", monsters, type, user)

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


export { adventureLocation, zoneGeneration, goToZone }