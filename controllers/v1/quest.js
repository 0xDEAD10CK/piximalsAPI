import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createQuest = async (req, res) => {
    try {
        const response = await prisma.quest.create({
            data:{
                title: "temp title",
                description: "Hunt down and defeat a monster",
                playerId: 2,
                locationId: 1,
                reward: 100,
                typeofQuest: 'DEFEAT',
                completed: false
            }
        })

        return res.status(200).json({msg: response})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}