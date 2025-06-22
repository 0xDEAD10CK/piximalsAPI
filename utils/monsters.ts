import { PrismaClient } from '@prisma/client'
import { getRandomInt, getRandomWeightedOption } from './utils'
import { monsterData } from '../data/monsterdata'
import { v4 as uuidv4 } from 'uuid'
import {
    prefixesByType,
    genericSuffixes,
} from './seeding/nameList'

const prisma = new PrismaClient()

function capitalizeEachWord(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase())
}

/**
 * 
 * @param {string} type - affects type of monster generated i.e nature
 * @returns A new random monster
 */
export const generateMonster = async (type: any) => {
    const defineType = getRandomInt(0, 3)
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
    const selectedAbilities:any[] = [];
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

    const randomPrefix = prefixesByType[monsterType][getRandomInt(0, prefixesByType[monsterType].length - 1)]
    const randomSuffix = genericSuffixes[getRandomInt(0, genericSuffixes.length - 1)]

    const monsterName = capitalizeEachWord(
        `${randomPrefix} ${randomSuffix}`
    )

    try {
        const monster = await prisma.monster.create({
            data: {
                id: id,
                name: monsterName,
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
    } catch (error:any) {
        return error
    }
}

/**
 * 
 * @param {int} id 
 * @param {string} monsterId 
 * @returns Attaches monster to a mangerie
 */
export const addMonsterToMenagerie = (userId:number, monsterId: string) => {
    try {
        const result = prisma.menagerie.create({
            data: {
                userId: userId,
                monsterId: monsterId,
            },
        });
        return result;
    } catch (error) {
        console.error(`Error adding Monster ID: ${monsterId} to menagerie: `, error);
    }
};


/**
 * 
 * @param {int} id 
 * @param {string} monsterId 
 * @returns removes monster from menagerie
 */
export const removeMonsterFromMenagerie = (id:number, monsterId: string) => {
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
export const updateMonsterStatus = (monsterId: string, status: string) => {
    return prisma.monster.update({
        where: { id: monsterId },
        data: { status: status },
    });
};

export const updateMonsterInZoneStatus = (zoneId: string, monsterId: string, status:string) => {
    return prisma.zone.update({
        where: { id: zoneId },
        data: {
            monsters: {
                update: {
                    where: { id: monsterId },
                    data: { status: status },
                },
            },
        },
    });
}

/**
 * 
 * @param {string} id 
 * @returns gets monster by id
 */
export const findMonsterById = (id: string) => {
    return prisma.monster.findUnique({
        where: { id: id },
    });
};

/**
 * 
 * @param {string} id 
 * @returns Deletes monster by id
 */
export const deleteMonster = (id: string) => {
    return prisma.monster.delete({
        where: { id: id },
    });
}

/**
 * 
 * Get all monsters with status "In_Party" from the user's menagerie
 * @param {string} userId
 * @returns All monsters in the user's party.
 */
export const countPartyMonsters = async (userId: number) => {
    const count = await prisma.menagerie.count({
        where: {
            userId: userId,
            monster: {
                status: "In_Party"
            }
        }
    });
    return count;
};

