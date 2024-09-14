import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

async function main() {
    const monsterid1 = uuidv4()
    const monsterid2 = uuidv4()
    const monsterid3 = uuidv4()
    const monsterid4 = uuidv4()
    const monsterid5 = uuidv4()
    // Seed monsters
    const monster1 = await prisma.monster.create({
        data: {
            id: monsterid1,
            name: 'Ember King',
            type: 'Pyro',
            species: 'Dragon',
            rarity: 'Transcendant',
            status: "ON_MARKET",
            url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${uuidv4()}`,
            hp: 167,
            ap: 34,
        },
    })

    const monster2 = await prisma.monster.create({
        data: {
            id: monsterid2,
            name: 'Glacier Warden',
            type: 'Cryo',
            species: 'Behemoth',
            rarity: 'Rare',
            status: "ON_MARKET",
            url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${uuidv4()}`,
            hp: 90,
            ap: 20,
        },
    })

    const monster3 = await prisma.monster.create({
        data: {
            id: monsterid3,
            name: 'Stellar Conqueror',
            type: 'Astral',
            species: 'Minotaur',
            rarity: 'Legendary',
            status: "ON_MARKET",
            url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${uuidv4()}`,
            hp: 135,
            ap: 25,
        },
    })

    const monster4 = await prisma.monster.create({
        data: {
            id: monsterid4,
            name: 'Umbra Dreadlord',
            type: 'Shadow',
            species: 'Serpent',
            rarity: 'Mythical',
            status: "ON_MARKET",
            url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${uuidv4()}`,
            hp: 155,
            ap: 30,
        },
    })

    const monster5 = await prisma.monster.create({
        data: {
            id: monsterid5,
            name: 'Luminar Harbinger',
            type: 'Solar',
            species: 'Sphinx',
            rarity: 'Uncommon',
            status: "ON_MARKET",
            url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${uuidv4()}`,
            hp: 100,
            ap: 24,
        },
    })

    // Seed shop items
    const shopItem1 = await prisma.shop.create({
        data: {
            id: uuidv4(),
            monsterId: monster1.id,
            playerId: 1,
            price: 25000,
        },
    })

    const shopItem2 = await prisma.shop.create({
        data: {
            id: uuidv4(),
            monsterId: monster2.id,
            playerId: 2,
            price: 1450,
        },
    })

    const shopItem3 = await prisma.shop.create({
        data: {
            id: uuidv4(),
            monsterId: monster3.id,
            playerId: 3,
            price: 6800,
        },
    })

    const shopItem4 = await prisma.shop.create({
        data: {
            id: uuidv4(),
            monsterId: monster4.id,
            playerId: 3,
            price: 10500,
        },
    })

    const shopItem5 = await prisma.shop.create({
        data: {
            id: uuidv4(),
            monsterId: monster5.id,
            playerId: 4,
            price: 750,
        },
    })

    console.log('Shop Seed data successfully inserted.')
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
