import { PrismaClient } from '@prisma/client'
import { generateZone, shuffleArray } from '../../utils/zoning.js';
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

const zoneGeneration = async (req, res) => {
    try {
        const { type, monsterAmount } = req.body
        const user = req.user;

        // Fetch monsters from the database
        const monsters = await prisma.monster.findMany({
            where: {
                type: type
            }
        })
        
        if (monsters.length < 1) return res.status(404).json({msg: "No monsters found"})
            
        const randomMonsters = shuffleArray(monsters, monsterAmount)
        
        const zone = await generateZone("Dangerzone", randomMonsters, type, user)

        return res.status(200).json({msg: "Welcome to the Dangerzone", zone: zone})
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

const goToZone = async (req, res) => {
    try {
        const { zoneid } = req.params
        const user = req.user;

        const player = await prisma.player.findFirst({
            where: {
                id: user.id
            }
        })

        if (!player) return res.status(404).json({msg: "Player not found"})
        
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


export { adventureLocation, zoneGeneration }