import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const adventureLocation = (req, res) => {
    try {
        const { zone } = req.params
        const user = req.user;

        return res.status(200).json({msg: "Welcome to the Dangerzone"})
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}


export { adventureLocation }