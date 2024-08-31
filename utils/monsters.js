import { PrismaClient } from '@prisma/client'
import { getRandomInt, getRandomWeightedOption } from './utils.js'
import { monsterData } from '../data/monsterdata.js'
import { v4 as uuidv4 } from 'uuid'
const prisma = new PrismaClient()

export const generateMonster = async (type) => {
    const defineType = getRandomInt(0, 10)
    let monsterType = ""

    // If defineType is 1 or type is empty, get a random type from the monsterData.types array
    // Otherwise, use the type passed in the function
    if (defineType === 1 || type === "") {
        monsterType = monsterData.types[getRandomInt(0, monsterData.types.length - 1)]
    } else {
        monsterType = type
    }

    const randomSpecies = monsterData.species[getRandomInt(0, monsterData.species.length - 1)]
    const randomRarity = getRandomWeightedOption(monsterData.rarity).rarity;
    const id = uuidv4()
    try {
        const monster = await prisma.monster.create({
            data: {
                id: id,
                name: "Jones",
                type: monsterType,
                species: randomSpecies,
                rarity: randomRarity,
                status: "Wild",
                url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${id}`,
                hp: 100,
                ap:20,
            },
        })

        return monster
    } catch (err) {
        console.log(err)
    }
}