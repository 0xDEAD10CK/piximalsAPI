import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { v4 as uuidv4 } from 'uuid'

import { monsterData } from '../../data/monsterdata.js';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Function to get a random weighted option
const getRandomWeightedOption = (options) => {
    const totalWeight = options.reduce((sum, option) => sum + option.weight, 0);
    let random = Math.random() * totalWeight;
    console.log("Total Weight:", totalWeight, "Random:", random)
    for (const option of options) {
        if (random < option.weight) {
            return option;
        }
        random -= option.weight;
    }
    
    return options[options.length - 1]; // Fallback
};

/**
 * Generates a new monster and saves it to the database.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The generated monster.
 */
const generateMonster = async (req, res) => {
    const randomType = monsterData.types[getRandomInt(0, monsterData.types.length - 1)];
    const randomSpecies = monsterData.species[getRandomInt(0, monsterData.species.length - 1)];
    const randomRarity = getRandomWeightedOption(monsterData.rarity).rarity;
    const id = uuidv4();

    try {
        // Fetch abilities based on the monster's type
        const abilities = await prisma.ability.findMany({
            where: {
                type: randomType,
            },
        });

        console.log("Abilities:", abilities);

        // Ensure we have enough abilities to choose from
        if (abilities.length < 2) {
            return res.status(500).json({
                msg: 'Not enough abilities for this monster type.',
            });
        }

        // Shuffle abilities and pick two unique abilities
        const selectedAbilities = [];
        while (selectedAbilities.length < 2) {
            const randomIndex = getRandomInt(0, abilities.length - 1);
            const selectedAbility = abilities[randomIndex];

            if (!selectedAbilities.some(a => a.id === selectedAbility.id)) {
                selectedAbilities.push(selectedAbility);
            }
        }

        console.log("Selected Abilities:", selectedAbilities);
        // Create the monster with selected abilities
        const monster = await prisma.monster.create({
            data: {
                id: id,
                name: "Jones",
                type: randomType,
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

        console.log(monster);

        return res.status(201).json({
            msg: 'Monster successfully generated',
            data: monster,
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};

/**
 * Fetches all monsters.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with the fetched monster data.
 */
const getMonsters = async (req, res) => {
    try {
        const monsterData = await prisma.monster.findMany({
            include: {
                abilities: {
                    select: {
                        name: true,
                        type: true,
                        category: true,
                        description: true
                    }, // Ensure abilities are included in the creation response
                },  // Include related abilities
            },
        })

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
