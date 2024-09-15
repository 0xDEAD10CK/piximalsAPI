import { PrismaClient } from "@prisma/client"
import { getRandomInt, getRandomWeightedOption } from "./utils.js"
const prisma = new PrismaClient()

export const randomItem = async (getLocation) => {

    const rarity = await getRandomWeightedOption(getLocation.rarity)

    const item = await prisma.item.findMany({
        where: {
            rarity: rarity.rarity
        }
    })
    
    const itemPicked = getRandomInt(0, item.length - 1)
    

    return item[itemPicked]
}