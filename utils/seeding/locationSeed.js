// utils/seeding/playerSeed.js

import { locationData } from "../../data/locationData.js";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


async function seed() {
  try {
    // Create Locations first
    locationData.forEach(async (location) => {
      await prisma.location.create({
        data: {
          name: location.name,
          description: location.description,
          type: location.type,
          rarity: location.rarity,
        }
      });
    });

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
