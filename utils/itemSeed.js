import { PrismaClient } from '@prisma/client'
import {
    potionsData,
    foodData,
    headData,
    bodyData,
    legData,
    footData,
    handData,
    shieldData,
    swordData,
    staffData,
    bowData,
    wandData,
    materialData} from '../data/itemData.js'

const prisma = new PrismaClient()

const seedItems = async (items) => {
    for (const item of items) {
        await prisma.item.create({
            data: {
                name: item.name,
                type: item.type,
                rarity: item.rarity,
                effects: item.effects,
                buyPrice: item.buyPrice,
                sellPrice: item.sellPrice,
            },
        });
    }
};

const main = async () => {
    try {
        await seedItems(potionsData);
        await seedItems(foodData);
        await seedItems(headData);
        await seedItems(bodyData);
        await seedItems(legData);
        await seedItems(footData);
        await seedItems(handData);
        await seedItems(shieldData);
        await seedItems(swordData);
        await seedItems(staffData);
        await seedItems(bowData);
        await seedItems(wandData);
        await seedItems(materialData);

        console.log('Seeding completed successfully.');
    } catch (e) {
        throw e
    } finally {
        await prisma.$disconnect()
    }
};

main();