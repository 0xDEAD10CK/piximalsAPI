import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createAbility = async () => {
    const { name, type, cost, damage, description, category, effects } = req.body;
    try {
        const ability = await prisma.ability.create({
            data: {
                name: name,
                type: type,
                cost: cost,
                damage: damage,
                description: description,
                category: category,
                effects: {
                    create: effects.effects.map((effect) => ({
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
        console.log('Ability created:', ability);
    } catch (error) {
        console.error('Error creating ability:', error);
    }
};

const getAbilities = async (req, res) => {
    const { page = 1, pageSize = 10, type, name, category } = req.query;

    const skip = (page - 1) * pageSize;

    try {
        const filterOptions = {
            where: {},
            include: {
                effects: true,  // If you want to include related effects
            },
        };

        if (type) {
            filterOptions.where.type = { contains: type };
        }

        if (name) {
            filterOptions.where.name = { contains: name };
        }

        if (category) {
            filterOptions.where.category = { contains: category };
        }

        const abilities = await prisma.ability.findMany({
            ...filterOptions,
            take: pageSize,
            skip,
        });

        const totalItems = await prisma.ability.count({
            where: filterOptions.where,
        });

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

export { getAbilities }