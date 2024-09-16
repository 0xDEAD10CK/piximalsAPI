import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export const getItemsFilter = async (pageSize, skip, type, name, rarity) => {
    const filterOptions = {
        where: {}
    };

    // Add conditions to the filterOptions if the parameters are provided
    if (type) {
        filterOptions.where.type = { contains: type };
    }

    if (rarity) {
        filterOptions.where.rarity = { contains: rarity };
    }

    if (name) {
        filterOptions.where.name = { contains: name };
    }

    // Fetch the filtered items using Prisma
    const items = await prisma.item.findMany({
        ...filterOptions,
        take: pageSize,
        skip,
    });

    // Return both the items and filterOptions in a tuple (array)
    return [items, filterOptions];
};


export const getTotalItemCount = async (filterOptions) => {
    return await prisma.item.count({
        where: filterOptions.where,
    });
}