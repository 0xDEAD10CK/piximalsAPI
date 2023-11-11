import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

async function main() {
    const typeArray = [
        'Pyro',
        'Cryo',
        'Aero',
        'Hydro',
        'Geo',
        'Electro',
        'Solar',
        'Lunar',
        'Shadow',
        'Mystic',
        'Nature',
        'Magma',
        'Frost',
        'Storm',
        'Radiant',
        'Astral',
        'Toxic',
        'Metallic',
        'Spectral',
        'Chaos',
    ]

    const speciesArray = [
        'Drake',
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
        'Hydracorn',
        'Phoenix',
        'Wendigo',
        'Treant',
        'Specter',
        'Chimera',
        'Wyrm',
    ]

    const rarityArray = [
        'Common',
        'Uncommon',
        'Rare',
        'Epic',
        'Legendary',
        'Mythical',
        'Transcendant'
    ]
    // Function to generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Seed monsters
async function seedMonsters(numMonsters) {
    for (let i = 0; i < numMonsters; i++) {
        const randomType = typeArray[getRandomInt(0, typeArray.length - 1)];
        const randomSpecies = speciesArray[getRandomInt(0, speciesArray.length - 1)];
        const randomRarity = rarityArray[getRandomInt(0, rarityArray.length - 1)]

        const monster = await prisma.monster.create({
            data: {
                id: uuidv4(),
                name: `${randomType} ${randomSpecies}`,
                type: randomType,
                species: randomSpecies,
                rarity: randomRarity, // You can customize the rarity logic as needed
                url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${uuidv4()}`,
                hp: getRandomInt(80, 120), // Adjust the range as needed
                ap: getRandomInt(15, 25), // Adjust the range as needed
            },
        });

        console.log(`Monster ${i + 1} created: ${monster.name}`);
    }

    console.log(`${numMonsters} monsters seeded successfully.`);
}

// Specify the number of monsters you want to create
const numMonstersToSeed = 20;

seedMonsters(numMonstersToSeed)
    .catch((e) => {
        console.error('Error seeding monsters:', e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
};

main()