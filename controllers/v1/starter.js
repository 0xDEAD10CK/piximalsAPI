import { PrismaClient } from '@prisma/client'
import { generateMonster } from '../../utils/monsters.js'
const prisma = new PrismaClient()

const getStarter = async (req, res) => {
    try {
        const response = []
        const defaultTypes = ["FIRE", "WATER", "EARTH"]

        for (const type of defaultTypes) {
            const monster = await generateMonster(type)
            response.push(monster)
        }

        return res.status(201).json({ msg: "successfully retrieved", data: response })
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

export { getStarter }