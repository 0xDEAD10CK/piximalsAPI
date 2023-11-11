import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

async function main() {
    const monsterid1 = uuidv4()
    const monsterid2 = uuidv4()
    // Seed monsters
    const monster1 = await prisma.monster.create({
        data: {
            id: monsterid1,
            name: 'Fire Dragon',
            type: 'Fire',
            species: 'Dragon',
            rarity: 'Epic',
            url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${uuidv4()}`,
            hp: 120,
            ap: 25,
        },
    })

    const monster2 = await prisma.monster.create({
        data: {
            id: monsterid2,
            name: 'Ice Yeti',
            type: 'Ice',
            species: 'Yeti',
            rarity: 'Rare',
            url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${uuidv4()}`,
            hp: 90,
            ap: 20,
        },
    })

    const inventoryItem1 = await prisma.inventory.create({
        data: {
            userId: 1,
            monsterId: monsterid1,
        },
    })

    const inventoryItem2 = await prisma.inventory.create({
        data: {
            userId: 2,
            monsterId: monsterid2,
        },
    })

    // Seed shop items
    const shopItem1 = await prisma.shop.create({
        data: {
            id: uuidv4(),
            monsterId: monster1.id,
            playerId: 1,
            price: 500,
        },
    })

    const shopItem2 = await prisma.shop.create({
        data: {
            id: uuidv4(),
            monsterId: monster2.id,
            playerId: 2,
            price: 425,
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
