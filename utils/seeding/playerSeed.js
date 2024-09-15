import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'
import { userData } from './playerObjects.js'

const prisma = new PrismaClient()

async function registerUser(username, password, role, locationId) {

    let user = await prisma.account.findUnique({ where: { username } });

    if (user) {
      return res.status(409).json({ msg: "Seeded user already exists" });
    }

    const salt = await bcryptjs.genSalt()
    const hashedPassword = await bcryptjs.hash(password, salt)

    user = await prisma.account.create({
        data: {
            username,
            password: hashedPassword,
            role,
            location: {
                connect: {
                    id: locationId
                }
            }
        }
    })

    delete user.password

    return user
}

async function seedUsers() {
    const data = userData;

    try {
        const createdUsers = await Promise.all(
            data.map(({ username, password, role, location }) =>
                registerUser(username, password, role, location)
            )
        )

        console.log('User Seed data successfully inserted:', createdUsers)
    } catch (error) {
        console.error('Error seeding users:', error)
    } finally {
        await prisma.$disconnect()
    }
}

seedUsers()
