import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { getAbilitiesFilter } from '../../utils/filteringUtils';

const createAbility = async (req, res) => {
    const { name,
        type,
        cost, 
        damage, 
        description, 
        category, 
        effectType,
        effectChance,
        effectTurns,
        effectDamage,
        effectReduction,
        effectHeal,
        effectIncrease } = req.body;

    try {
        const ability = await prisma.ability.create({
            data: {
                name: name,
                type: type,
                cost: cost,
                damage: damage,
                description: description,
                category: category,
                effectType: effectType,
                effectTurns: effectTurns,
                effectChance: effectChance,
                effectDamage: effectDamage,
                effectReduction: effectReduction,
                effectHeal: effectHeal,
                effectIncrease: effectIncrease,
            },
        });
        console.log('Ability created:', ability);
    } catch (error) {
        console.error('Error creating ability:', error);
    }
};

const getAbilities = async (req, res) => {
    const { page = 1, pageSize = 10, type, name, category } = req.query;

    const skip = (page - 1) * pageSize;

    try {
        const [abilities, filterOptions] = await getAbilitiesFilter(pageSize, skip, type, name, category);

        const totalItems = await getTotalAbilityCount(filterOptions);

        const totalPages = Math.ceil(totalItems / pageSize);

        return res.status(200).json({
            msg: 'Abilities retrieved successfully',
            data: {
                abilities,
                totalPages,
                currentPage: page,
            },
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
          });
    } finally {
        console.log("DONE")
    }
}

export { getAbilities, createAbility }