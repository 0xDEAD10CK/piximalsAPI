import { PrismaClient } from '@prisma/client'
import { addMonsterToMenagerie, generateMonster } from '../../utils/monsters'
import { collectedStarter, getUserAccount } from '../../utils/userUtils'
import { Request, Response } from 'express'
import { isAuthenticated } from '../../utils/isAuthenticated'
const prisma = new PrismaClient()

const getStarter = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        res.status(401).json({ msg: 'Unauthorized'})
        return 
    }
    try {
        const response = []
        const defaultTypes = ["FIRE", "WATER", "EARTH"]
        const user = req.user;

        const userData = await getUserAccount(user.id)
        
        if (!userData){
            res.status(400).json({ msg: "Starters not found"})
            return 
        }

        if (userData.starter === true){
            res.status(400).json({ msg: "Already have a starter"})
            return 
        }

        for (const type of defaultTypes) {
            const monster = await generateMonster(type)
            response.push(monster)
        }

        res.status(201).json({ msg: "successfully retrieved", data: response })
        return 
    } catch (error) {
        res.status(500).json({msg: error})
        return 
    }
}

const collectStarter = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        res.status(401).json({ msg: 'Unauthorized'})
        return 
    }
    try {
        const { monsterId } = req.body
        const user = req.user;

        const monsterResponse = await addMonsterToMenagerie(user.id, monsterId)
        await collectedStarter(user.id)
        
        res.status(200).json({msg: "Collected Starter", data: monsterResponse})
        return 
    } catch (error) {
        res.status(500).json({msg: error})
        return 
    }
}

export { getStarter, collectStarter }