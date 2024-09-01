import { PrismaClient } from '@prisma/client'
import { fireAbilities, iceAbilities } from '../../data/abilityData.js'

const prisma = new PrismaClient();

const seedAbilities = async (abilities) => {
    // Loop through each ability in the seed data
    for (const abilityData of abilities) {
        // Create each ability with its related effects
        await prisma.ability.create({
            data: {
                name: abilityData.name,
                type: abilityData.type,
                cost: abilityData.cost,
                damage: abilityData.damage,
                description: abilityData.description,
                category: abilityData.category,
                effects: {
                    create: abilityData.effects.map((effect) => ({
                        name: effect.name,
                        type: effect.type,
                        turns: effect.turns,
                        chance: effect.chance,
                        damage: effect.damage ?? null,
                        reduction: effect.reduction ?? null,
                        heal: effect.heal ?? null,
                    })),
                },
            },
        });
    }
}

const main = async () => {
    try {
        // Seed abilities for each type
        await seedAbilities(fireAbilities);
        await seedAbilities(iceAbilities);
        // Add more arrays if needed
        console.log('Seeding completed successfully.');
    } catch (error) {
        console.error('Error seeding abilities:', error);
    } finally {
        await prisma.$disconnect();
    }
};

// Execute the main function
main();