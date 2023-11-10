import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const purchaseMonster = async (req, res) => {
  const { monsterId } = req.body;
  const { userData } = req.user

  try {
    // Find the monster in the shop
    const shopItem = await prisma.shop.findUnique({
      where: { monsterId },
      include: { monster: true }, // Include monster details in the response
    });

    if (!shopItem || !shopItem.isAvailable) {
      return res.status(404).json({
        msg: "Monster not found or not available for purchase.",
      });
    }

    // TODO: Implement logic for handling user balance and payment
    await prisma.user.update({
        where: { id: Number(userData.id) },
        data: {
            currency: Number(userData.currency - shopItem.price)
        }
    })

    // TODO: Implement logic for transferring the monster to the user

    // Remove item from the shop
    await prisma.shop.delete({
      where: { monsterId },
      data: {
        quantity: {
          decrement: quantity, // Decrement the quantity by the purchased amount
        },
      },
    });

    return res.status(200).json({
      msg: "Monster purchased successfully",
      data: {
        purchasedMonster: shopItem.monster,
        quantity,
        totalPrice,
      },
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

export { purchaseMonster };
