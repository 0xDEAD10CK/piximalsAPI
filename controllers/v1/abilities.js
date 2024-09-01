import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getAbilities = async (req, res) => {
    console.log("DEBUG1")
    try {
        console.log("DEBUG2")
        
        const abilities = await prisma.ability.findMany({
            select: {
                id: true,
                name: true,
                type: true,
                cost: true,
                damage: true,
                description: true,
                category: true,
                effects: true
            }
        })
        
        console.log(abilities)
        
        return res.status(201).json({
            msg: 'Ability information successfully fetched!',
            data: abilities,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
          });
    } finally {
        console.log("DONE")
    }
}

export { getAbilities }