import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

export const createQuest = async (req: Request, res: Response) => {
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

        res.status(200).json({msg: response})
        return 
    } catch (error: any) {
        res.status(500).json({msg: error.message})
        return 
    }
}