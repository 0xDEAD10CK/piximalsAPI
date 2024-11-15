import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { v4 as uuidv4 } from 'uuid'

const generateMonster = async (req, res) => {
    const { name, type, species, rarity, hp, ap } = req.body
    console.log(name, type, species, rarity, hp, ap)
    try {
        const monster = await prisma.monster.create({
            data: {
                id: uuidv4(),
                name,
                type,
                species,
                rarity,
                url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=fawfawfqw`,
                hp,
                ap,
            },
        })

        console.log(monster)

        return res.status(201).json({
            msg: 'Monster successfully generated',
            data: monster,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

const getMonsters = async (req, res) => {
    try {
        const monsterData = await prisma.monster.findMany({})
        console.log(monsterData)

        return res.status(201).json({
            msg: 'Monster successfully fetched',
            data: monsterData,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

export { generateMonster, getMonsters }
