import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Check if the item exists in the database
export const checkItem = async (itemId) => {
    return await prisma.item.findUnique({
        where: { id: Number(itemId) }
    });
}