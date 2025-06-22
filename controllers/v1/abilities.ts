import { Ability, AbilityCategory, PrismaClient, AbilityType, EffectType } from '@prisma/client'
const prisma = new PrismaClient()

import { getAbilitiesFilter, getTotalAbilityCount } from '../../utils/filteringUtils.js';
import { Request, Response } from 'express';

interface CreateAbilityRequestBody {
   name: string;
   type: AbilityType;
   cost: number;
   damage?: number;
   description: string;
   category: AbilityCategory;
   effectType?: string;
   effectTurns?: number;
   effectChance?: number;
   effectDamage?: number;
   effectReduction?: number;
   effectHeal?: number;
   effectIncrease?: number;
}

interface ErrorResponse {
  msg: string;
}

interface SuccessResponse {
    message: string;
    data: Ability;
}

const createAbility = async (
        req: Request<{}, {}, CreateAbilityRequestBody>,
        res: Response<SuccessResponse | ErrorResponse>
    ): Promise<void> => {
    try {
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
        
        res.status(200).json({
            msg: 'Ability created successfully',
            data: ability,
        });
    } catch (error: any) {
        res.status(500).json({
            msg: error.message,
          });
    }
};

interface GetAbilitiesQuery {
    page?: number;
    pageSize?: number;
    type: EffectType;
    name?: string;
    category?: string;
}

interface GetAbilitiesSuccess {
    msg: string
    data: {
        abilities: Ability;
        totalPages: number;
        currentPage: number;
    }
}


const getAbilities = async (
        req: Request<{}, {}, {}, GetAbilitiesQuery>, 
        res: Response<GetAbilitiesSuccess | ErrorResponse>
    ) => {
    const { page = 1, pageSize = 10, type, name, category } = req.query;

    const skip = (page - 1) * pageSize;

    try {
        const [abilities, filterOptions] = await getAbilitiesFilter(pageSize, skip, type, name, category);
        const totalItems = await getTotalAbilityCount(filterOptions);
        const totalPages = Math.ceil(totalItems / pageSize);

        res.status(200).json({
            msg: 'Abilities retrieved successfully',
            data: {
                abilities,
                totalPages,
                currentPage: page,
            },
        })
    } catch (err: any) {
        res.status(500).json({
            msg: err.message,
          });
    }
}

export { getAbilities, createAbility }