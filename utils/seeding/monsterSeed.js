import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import {
    prefixesByType,
    genericSuffixes,
} from './nameList.js'

const prisma = new PrismaClient()

async function main() {
    const typeArray = [
        'FIRE', // Fire: Associated with flames, heat, and combustion.
        'ICE', // Ice: Related to freezing temperatures and icy elements.
        'WIND', // Air: Pertaining to the wind, breezes, and atmospheric currents.
        'WATER', // Water: Connected to liquid forms, oceans, and aquatic environments.
        'EARTH', // Rock: Involving earth, stones, and geological elements.
        'ELECTRIC', // Electric: Concerned with electricity, shocks, and energy.
        'SOLAR', // Solar: Linked to the sun, solar energy, and radiant sunlight.
        'LUNAR', // Lunar: Associated with the moon and nocturnal elements.
        'SHADOW', // Shadow: Involving darkness, obscurity, and hidden elements.
        'MYSTIC', // Mystic: Connected to magical and mysterious forces.
        'NATURE', // Nature: Relating to the natural world, plants, and ecosystems.
        'ASTRAL', // Astral: Connected to celestial bodies, stars, and otherworldly elements.
        'TOXIC', // Toxic: Involving harmful or poisonous substances.
        'METALLIC', // Metallic: Related to metal elements and durability.
        'SPECTRAL', // Spectral: Pertaining to ghosts, spirits, and ethereal phenomena.
        'CHAOS', // Chaos: Associated with disorder, unpredictability, and tumultuous elements.
    ]

    const speciesArray = [
        'Dragon',
        'Yeti',
        'Golem',
        'Gryphon',
        'Serpent',
        'Salamander',
        'Unicorn',
        'Wraith',
        'Sphinx',
        'Behemoth',
        'Minotaur',
        'Banshee',
        'Pegasus',
        'Hydra',
        'Phoenix',
        'Wendigo',
        'Treant',
        'Specter',
        'Chimera',
        'Wyrm',
        'Harpy',
        'Cerberus',
        'Kraken',
        'Leviathan',
        'Manticore',
        'Cyclops',
        'Griffin',
        'Basilisk',
        'Gorgon',
        'Siren',
        'Titan'
    ]

    const rarityArray = [
        'Common',
        'Uncommon',
        'Rare',
        'Epic',
        'Legendary',
        'Mythical',
        'Transcendant',
    ]
    // Function to generate a random number between min and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function capitalizeEachWord(str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase())
    }

    // Seed monsters
    async function seedMonsters(numMonsters) {
        for (let i = 0; i < numMonsters; i++) {
            const randomType = typeArray[getRandomInt(0, typeArray.length - 1)]
            const randomSpecies =
                speciesArray[getRandomInt(0, speciesArray.length - 1)]
            const randomRarity =
                rarityArray[getRandomInt(0, rarityArray.length - 1)]

            // Generate a name using a random prefix and suffix
            const randomPrefix =
                prefixesByType[randomType][
                    getRandomInt(0, prefixesByType[randomType].length - 1)
                ]
            const randomSuffix =
                genericSuffixes[
                    getRandomInt(0, genericSuffixes.length - 1)
                ]

            // Capitalize each word in the name
            const monsterName = capitalizeEachWord(
                `${randomPrefix} ${randomSuffix}`
            )

            // Define base values for HP and AP
            const baseHP = 100
            const baseAP = 20

            // Define the range of random variation for each rarity
            const commonVariation = 10
            const uncommonVariation = 16
            const rareVariation = 24
            const epicVariation = 35
            const legendaryVariation = 45
            const mythicalVariation = 60
            const transcendantVariation = 80

            let hp = baseHP,
                ap = baseAP
            switch (randomRarity) {
                case 'Common':
                    hp += getRandomInt(0, commonVariation)
                    ap += getRandomInt(0, commonVariation)
                    break
                case 'Uncommon':
                    hp += getRandomInt(0, uncommonVariation)
                    ap += getRandomInt(0, uncommonVariation)
                    break
                case 'Rare':
                    hp += getRandomInt(0, rareVariation)
                    ap += getRandomInt(0, rareVariation)
                    break
                case 'Epic':
                    hp += getRandomInt(0, epicVariation)
                    ap += getRandomInt(0, epicVariation)
                    break
                case 'Legendary':
                    hp += getRandomInt(0, legendaryVariation)
                    ap += getRandomInt(0, legendaryVariation)
                    break
                case 'Mythical':
                    hp += getRandomInt(0, mythicalVariation)
                    ap += getRandomInt(0, mythicalVariation)
                    break
                case 'Transcendant':
                    hp += getRandomInt(0, transcendantVariation)
                    ap += getRandomInt(0, transcendantVariation)
                    break
                // Add more cases for other rarities as needed
                default:
                    hp += getRandomInt(80, 100)
                    ap += getRandomInt(15, 20)
            }

            const monster = await prisma.monster.create({
                data: {
                    id: uuidv4(),
                    name: `${monsterName}`,
                    type: randomType,
                    species: randomSpecies,
                    rarity: randomRarity, // You can customize the rarity logic as needed
                    status: 'Wild',
                    url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${uuidv4()}`,
                    hp: Number(hp),
                    ap: Number(ap),
                },
            })

            console.log(`Monster ${i + 1} created: ${monster.name}`)
        }

        console.log(`${numMonsters} monsters seeded successfully.`)
    }

    // Specify the number of monsters you want to create
    const numMonstersToSeed = 12

    seedMonsters(numMonstersToSeed)
        .catch((e) => {
            console.error('Error seeding monsters:', e)
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
}

main()
