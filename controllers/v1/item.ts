import { PrismaClient } from '@prisma/client'
import { randomItem } from '../../utils/items';
import { getItemsFilter, getTotalItemCount } from '../../utils/filteringUtils';
import { Request, Response } from 'express';
const prisma = new PrismaClient()

interface ItemQuery {
    page?: number;
    pageSize?: number;
    type?: string;
    name?: string;
    rarity?: string;
}

const getItems = async (req: Request<{}, {}, {}, ItemQuery>, res: Response) => {
    const { page = 1, pageSize = 10, type, name, rarity } = req.query;

    const skip = (page - 1) * pageSize;

    try {
        const [items, filterOptions] = await getItemsFilter(pageSize, skip, type, name, rarity );

        const totalItems = await getTotalItemCount(filterOptions);

        const totalPages = Math.ceil(totalItems / pageSize);

        res.status(200).json({
            msg: 'Items retrieved successfully',
            data: {
                items,
                totalPages,
                currentPage: page,
            },
        })
        return 
    } catch (err: any) {
        res.status(500).json({
            msg: err.message,
          });
        return 
    }
}

const getRandomItem = async (req: Request, res: Response) => {
    try {
        const getLocation = await prisma.location.findFirst()

        const item = await randomItem(getLocation)

        res.status(200).json({
            msg: 'Item retrieved successfully',
            data: item,
        });
        return 
    } catch (err: any) {
        res.status(500).json({
            msg: err.message,
        });
        return 
    }
}


export { getItems, getRandomItem }