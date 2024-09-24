import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * 
 * @param {int} itemId 
 * @returns 
 */
export const checkItem = async (itemId) => {
    return await prisma.item.findUnique({
        where: { id: Number(itemId) }
    });
}

/**
 * 
 * @param {int} userId 
 * @param {int} itemId 
 * @param {int} quantity 
 * @returns an inventoryitem to the users inventory
 */
export const addToInventory = async (userId, itemId, quantity) => {
    try {
      // Step 1: Fetch the user's account and include inventory
      const user = await prisma.account.findUnique({
        where: { id: userId },
        include: { inventory: { include: { items: true } } },  // Include inventory and its items
      });
  
      if (!user || !user.inventory) {
        return { status: 404, msg: 'Inventory not found for user' };
      }
  
      // Step 2: Check if the item already exists in the inventory
      const existingItem = user.inventory.items.find(item => item.itemId === itemId);
  
      if (existingItem) {
        // If the item exists, update its quantity
        const updatedItem = await prisma.inventoryItem.update({
          where: { id: existingItem.id },
          data: { quantity: existingItem.quantity + quantity },
        });
  
        return updatedItem
      } else {
        // Otherwise, create a new inventory item
        const createdItem = await prisma.inventoryItem.create({
          data: {
            inventoryId: user.inventory.id,
            itemId,
            quantity,
          },
        });
  
        return createdItem
      }
    } catch (error) {
      return { status: 500, msg: `Error adding item to inventory: ${error.message}` };
    }
  };
  