import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Seed monsters
  const user1 = await prisma.user.create({
    data: {
        "username": "Awesome_User1",
        "password": "BestGuy"
    },
  });

  const user2 = await prisma.user.create({
    data: {
        "username": "NerdyBoy69",
        "password": "ArmpitMaster"
    }
  });

  const user3 = await prisma.user.create({
    data: {
        "username": "SuperAdmin",
        "password": "MasterOfGame"
    }
  });

  console.log("Player Seed data successfully inserted.");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });