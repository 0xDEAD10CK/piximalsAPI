// utils/seeding/playerSeed.js

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function seed() {
  try {
    // Create Locations first
    await prisma.location.create({
      data: {
        name: 'Forrect Park',
        type: 'Nature',
      },
    });

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
