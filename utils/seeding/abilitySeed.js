import { PrismaClient } from '@prisma/client'
import {  
    fireAbilities, 
    iceAbilities, 
    windAbilities, 
    waterAbilities, 
    earthAbilities, 
    electricAbilities, 
    solarAbilities,
    lunarAbilities,
    shadowAbilities,
    mysticAbilities,
    natureAbilities,
    astralAbilities,
    toxicAbilities,
    metallicAbilities,
    spectralAbilities,
    chaosAbilities,
    crispiesAbilities} from '../../data/abilityData.js'

const prisma = new PrismaClient();

const seedAbilities = async (abilities) => {
    for (const abilityData of abilities) {
        await prisma.ability.create({
            data: {
                name: abilityData.name,
                type: abilityData.type,
                cost: abilityData.cost,
                damage: abilityData.damage,
                description: abilityData.description,
                category: abilityData.category,
                effectType: abilityData.effectType,
                effectTurns: abilityData.effectTurns,
                effectChance: abilityData.effectChance,
                effectDamage: abilityData.effectDamage,
                effectReduction: abilityData.effectReduction,
                effectHeal: abilityData.effectHeal,
                effectIncrease: abilityData.effectIncrease,
            },
        });
    }
};


const main = async () => {
    try {
        await seedAbilities(fireAbilities);
        await seedAbilities(iceAbilities);
        await seedAbilities(windAbilities);
        await seedAbilities(waterAbilities);
        await seedAbilities(earthAbilities);
        await seedAbilities(electricAbilities);
        await seedAbilities(solarAbilities);
        await seedAbilities(lunarAbilities);
        await seedAbilities(shadowAbilities);
        await seedAbilities(mysticAbilities);
        await seedAbilities(natureAbilities);
        await seedAbilities(astralAbilities);
        await seedAbilities(toxicAbilities);
        await seedAbilities(metallicAbilities);
        await seedAbilities(spectralAbilities);
        await seedAbilities(chaosAbilities);
        await seedAbilities(crispiesAbilities);

        console.log('Seeding completed successfully.');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await prisma.$disconnect();
    }
};

main();