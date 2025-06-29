import { PrismaClient } from '@prisma/client'
import { addMonsterToMenagerie, generateMonster } from '../../utils/monsters'
import { collectedStarter, getUserAccount } from '../../utils/userUtils'
import { Request, Response } from 'express'
import { isAuthenticated } from '../../utils/isAuthenticated'
const prisma = new PrismaClient()

const getStarter = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        return res.status(401).json({ msg: 'Unauthorized'})
    }
    try {
        const response = []
        const defaultTypes = ["FIRE", "WATER", "EARTH"]
        const user = req.user;

        const userData = await getUserAccount(user.id)
        
        if (!userData){
            return res.status(400).json({ msg: "Starters not found"})
        }

        if (userData.starter === true){
            return res.status(400).json({ msg: "Already have a starter"})
        }

        for (const type of defaultTypes) {
            const monster = await generateMonster(type)
            response.push(monster)
        }

        return res.status(201).json({ msg: "successfully retrieved", data: response })
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

const collectStarter = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        return res.status(401).json({ msg: 'Unauthorized'})
    }
    try {
        const { monsterId } = req.body
        const user = req.user;

        const monsterResponse = await addMonsterToMenagerie(user.id, monsterId)
        await collectedStarter(user.id)
        
        res.status(200).json({msg: "Collected Starter", data: monsterResponse})
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

export { getStarter, collectStarter }