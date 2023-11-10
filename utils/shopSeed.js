import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

async function main() {
  // Seed monsters
  const monster1 = await prisma.monster.create({
    data: {
      name: "Fire Dragon",
      type: "Fire",
      species: "Dragon",
      rarity: "Epic",
      url: "https://example.com/fire-dragon.png",
      hp: 120,
      ap: 25,
    },
  });

  const monster2 = await prisma.monster.create({
    data: {
      name: "Ice Yeti",
      type: "Ice",
      species: "Yeti",
      rarity: "Rare",
      url: "https://example.com/ice-yeti.png",
      hp: 90,
      ap: 20,
    },
  });

  // Seed shop items
  const shopItem1 = await prisma.shop.create({
    data: {
      monsterId: monster1.id,
      price: 500,
      id: uuidv4()
    },
  });

  const shopItem2 = await prisma.shop.create({
    data: {
      monsterId: monster2.id,
      price: 425,
      id: uuidv4()
    },
  });

  console.log("Shop Seed data successfully inserted.");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });