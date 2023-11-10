import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const purchaseMonster = async (req, res) => {
  const { id } = req.params;
  const user = req.user;

  try {
    // Find the monster in the shop
    const shopItem = await prisma.shop.findUnique({
      where: { id },
      include: { monster: true }, // Include monster details in the response
    });

    console.log(user)

    if (!shopItem || !shopItem.isAvailable) {
      return res.status(404).json({
        msg: "Monster not found or not available for purchase.",
      });
    }

    if (user.currency < shopItem.price) {
        return res.status(403).json({
          msg: "You do not have enough money!",
        });
      }


    // TODO: Implement logic for handling user balance and payment
    await prisma.user.update({
        where: { id: Number(user.id) },
        data: {
            currency: { decrement: shopItem.price }
        }
    })

    // TODO: Implement logic for transferring the monster to the user
    const newInventoryItem = await prisma.inventory.create({
        data: {
          userId: user.id,
          monsterId: shopItem.monster.id,
        },
      });
      
    // Remove item from the shop
    await prisma.shop.delete({
      where: { id },
    });

    return res.status(200).json({
      msg: "Monster purchased successfully",
      data: {
        purchasedMonster: shopItem.monster
      },
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

const getShop = async (req, res) => {
    const { page = 1, pageSize = 10, type, species, rarity } = req.query;
  
    const skip = (page - 1) * pageSize;
  
    try {
      const filterOptions = {
        isAvailable: true,
        monster: {},
      };
  
      if (type) {
        filterOptions.monster.type = { contains: type };
      }
  
      if (species) {
        filterOptions.monster.species = { contains: species };
      }
  
      if (rarity) {
        filterOptions.monster.rarity = { contains: rarity };
      }
  
      const shopItems = await prisma.shop.findMany({
        take: pageSize,
        skip,
        where: filterOptions,
        include: {
          monster: true,
        },
      });
  
      const totalItems = await prisma.shop.count({
        where: filterOptions,
      });
  
      const totalPages = Math.ceil(totalItems / pageSize);
  
      return res.status(200).json({
        msg: "Shop items retrieved successfully",
        data: {
          shopItems,
          totalPages,
          currentPage: page,
        },
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };
  
export { purchaseMonster, getShop };
