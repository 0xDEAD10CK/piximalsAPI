import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const shuffleArray = (array, monsterAmount) => {
    array = array.sort(() => Math.random() - 0.5);
    array = array.slice(0, monsterAmount);
    return array;
}

export const generateZone = async (name, randomMonsters, type, user) => {
    const zone = await prisma.zone.create({
        data: {
            zonename: name,
            type: type,
            players: {
                connect: {id: user.id}
            },
            monsters: {
                connect: randomMonsters.map(monster => {
                    return {id: monster.id}
                })
            }
        }
    })
    
    return zone;
}