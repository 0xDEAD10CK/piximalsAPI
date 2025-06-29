import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllUsers = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const users = await prisma.account.findMany({
      select: {
        id: true,
        username: true,
        currency: true,
        menagerie: {
          select: {
            monster: {
              select: {
                id: true,
                type: true,
                status: true,
                species: true,
                rarity: true,
                name: true,
                url: true,
                hp: true,
                ap: true,
              },
            },
          },
        },
        // You can still include inventory if needed
        inventory: {
          select: {
            items: {
              select: {
                quantity: true,
                item: {
                  select: {
                    id: true,
                    name: true,
                    rarity: true,
                    type: true,
                    buyPrice: true,
                    sellPrice: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return res.status(200).json({
      msg: 'User information successfully fetched!',
      data: users,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({
      msg: 'An error occurred while fetching users.',
    });
  }
};

export { getAllUsers };
