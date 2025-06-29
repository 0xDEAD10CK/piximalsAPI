import { PrismaClient } from "@prisma/client"
import { getRandomInt, getRandomWeightedOption } from "./utils"
const prisma = new PrismaClient()

/**
 * 
 * @param {*} getLocation 
 * @returns returns a random item
 */
export const randomItem = async (getLocation: any) => {

    const rarity = await getRandomWeightedOption(getLocation.rarity)
    const item = await prisma.item.findMany({
        where: {
            rarity: rarity.rarity
        }
    })
    
    const itemPicked = getRandomInt(0, item.length - 1)
    return item[itemPicked]
}