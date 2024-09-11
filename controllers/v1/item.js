import { PrismaClient } from '@prisma/client'
import { getRandomWeightedOption } from '../../utils/utils.js';
import { randomItem } from '../../utils/items.js';
const prisma = new PrismaClient()

const getItems = async (req, res) => {
    const { page = 1, pageSize = 10, type, name, rarity } = req.query;

    const skip = (page - 1) * pageSize;

    try {
        const filterOptions = {
            where: {}
        };

        if (type) {
            filterOptions.where.type = { contains: type };
        }

        if (rarity) {
            filterOptions.where.rarity = { contains: rarity}
        }

        if (name) {
            filterOptions.where.name = { contains: name };
        }

        const items = await prisma.item.findMany({
            ...filterOptions,
            take: pageSize,
            skip,
        });

        const totalItems = await prisma.item.count({
            where: filterOptions.where,
        });

        const totalPages = Math.ceil(totalItems / pageSize);

        return res.status(200).json({
            msg: 'Items retrieved successfully',
            data: {
                items,
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

const getRandomItem = async (req, res) => {
    try {
        const getLocation = await prisma.location.findFirst()

        const item = await randomItem(getLocation)

        return res.status(200).json({
            msg: 'Item retrieved successfully',
            data: item,
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
}


export { getItems, getRandomItem }