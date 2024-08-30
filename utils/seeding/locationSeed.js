// utils/seeding/playerSeed.js

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function seed() {
  try {
    // Create Locations first
    const location1 = await prisma.location.create({
      data: {
        name: 'Location A',
      },
    });

    const location2 = await prisma.location.create({
      data: {
        name: 'Location B',
      },
    });

    // Now create Accounts with references to existing Locations
    await prisma.account.create({
      data: {
        username: 'player1',
        password: 'password123',
        locationId: location1.id, // Reference to Location A
      },
    });

    await prisma.account.create({
      data: {
        username: 'player2',
        password: 'password456',
        locationId: location2.id, // Reference to Location B
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
