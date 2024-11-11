import { PrismaClient } from '@prisma/client'
import { getRandomInt, getRandomWeightedOption } from './utils.js'
import { monsterData } from '../data/monsterdata.js'
import { v4 as uuidv4 } from 'uuid'
const prisma = new PrismaClient()

/**
 * 
 * @param {string} type - affects type of monster generated i.e nature
 * @returns A new random monster
 */
export const generateMonster = async (type) => {
    const defineType = getRandomInt(0, 10)
    let monsterType = ""
    // If defineType is 1 or type is empty, get a random type from the monsterData.types array
    // Otherwise, use the type passed in the function
    if (defineType === 1 || type === "") {
        monsterType = monsterData.types[getRandomInt(0, monsterData.types.length - 1)]
    } else {
        monsterType = type.toUpperCase()
    }
    console.log(monsterType)
    const abilities = await prisma.ability.findMany({
        where: {
            type: monsterType,
        },
    });
    
    console.log(abilities.length)
    const selectedAbilities = [];
    while (selectedAbilities.length < 2) {
        const randomIndex = getRandomInt(0, abilities.length - 1);
        const selectedAbility = abilities[randomIndex];
        if (!selectedAbilities.some(a => a.id === selectedAbility.id)) {
            selectedAbilities.push(selectedAbility);
        }
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
                abilities: selectedAbilities && selectedAbilities.length > 0 ? {
                    connect: selectedAbilities.map(ability => ({ id: ability.id })),
                } : undefined,
            },
            include: {
                abilities: true
            },
        })
        return monster
    } catch (err) {
        return res.status(500).json({msg: error})
    }
}

/**
 * 
 * @param {int} id 
 * @param {string} monsterId 
 * @returns Attaches monster to a mangerie
 */
export const addMonsterToMenagerie = (id, monsterId) => {
    return prisma.menagerie.create({
        data: {
            userId: id,
            monsterId: monsterId,
        },
    });
};

/**
 * 
 * @param {int} id 
 * @param {string} monsterId 
 * @returns removes monster from menagerie
 */
export const removeMonsterFromMenagerie = (id, monsterId) => {
    return prisma.menagerie.deleteMany({
        where: {
            userId: id,
            monsterId: monsterId,
        },
    });
};

/**
 * 
 * @param {string} monsterId 
 * @param {string} status 
 * @returns 
 */
export const updateMonsterStatus = (monsterId, status) => {
    return prisma.monster.update({
        where: { id: monsterId },
        data: { status: status },
    });
};

/**
 * 
 * @param {string} id 
 * @returns gets monster by id
 */
export const findMonsterById = (id) => {
    return prisma.monster.findUnique({
        where: { id: id },
    });
};