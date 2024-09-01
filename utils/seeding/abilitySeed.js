import { PrismaClient } from '@prisma/client'
import { pyroAbilities } from '../../data/abilityData.js'

const prisma = new PrismaClient();

const seedAbilities = async () => {
    // Loop through each ability in the seed data
    for (const abilityData of pyroAbilities) {
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

// Execute the main function
seedAbilities()
    .then(() => {
        console.log('Abilities have been seeded.');
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });