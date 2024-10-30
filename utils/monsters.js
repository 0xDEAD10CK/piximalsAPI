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
    const defineType = getRandomInt(0, 3)
    let monsterType = ""

    console.log(type)

    // If defineType is 1 or type is empty, get a random type from the monsterData.types array
    // Otherwise, use the type passed in the function
    if (defineType === 1 || type === "") {
        monsterType = monsterData.types[getRandomInt(0, monsterData.types.length - 1)]
    } else {
        monsterType = type
    }

    const abilities = await prisma.ability.findMany({
        where: {
            type: monsterType,
        },
    });

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
                ap: 20,
                abilities: {
                    connect: selectedAbilities.map(ability => ({ id: ability.id })),
                },
            },
            include: {
                abilities: true
            }
        });

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
export const addMonsterToMenagerie = (userId, monsterId) => {
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

export const updateMonsterInZoneStatus = (zoneId, monsterId, status) => {
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
export const findMonsterById = (id) => {
    return prisma.monster.findUnique({
        where: { id: id },
    });
};

/**
 * 
 * @param {string} id 
 * @returns Deletes monster by id
 */
export const deleteMonster = (id) => {
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
export const countPartyMonsters = async (userId) => {
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

