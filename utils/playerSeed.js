import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'

const prisma = new PrismaClient()

async function registerUser(username, password, role) {

    let user = await prisma.user.findUnique({ where: { username } });

    if (user) {
      return res.status(409).json({ msg: "Seeded user already exists" });
    }

    const salt = await bcryptjs.genSalt()
    const hashedPassword = await bcryptjs.hash(password, salt)

    user = await prisma.user.create({
        data: { username, password: hashedPassword, role },
    })

    delete user.password

    return user
}

async function seedUsers() {
    const userData = [
        { username: 'Awesome_User1', password: 'BestGuy', role: 'BASIC_USER' },
        {
            username: 'NerdyBoy69',
            password: 'ArmpitMaster',
            role: 'BASIC_USER',
        },
        {
            username: 'SuperAdmin',
            password: 'MasterOfGame',
            role: 'SUPER_ADMIN',
        },
    ]

    try {
        const createdUsers = await Promise.all(
            userData.map(({ username, password, role }) =>
                registerUser(username, password, role)
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
