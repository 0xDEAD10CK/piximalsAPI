import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import {
    sellInventoryItem,
    removeListingFromShop,
    createShopListing
} from '../../utils/shopUtils.js';

import { 
    deductBalance,
    updateBalance,
} from '../../utils/accountBalance.js';

import {
    addMonsterToMenagerie,
    updateMonsterStatus,
    removeMonsterFromMenagerie,
    findMonsterById
} from '../../utils/monsters.js';

const purchaseMonster = async (req, res) => {
    const { id } = req.params;
    const user = req.user;

    try {
        // Find the monster in the shop
        const shopItem = await prisma.shop.findUnique({
            where: { id },
            include: { monster: true }, // Include monster details in the response
        });

        // Check if the user has enough money
        const buyer = await prisma.account.findUnique({
            where: { id: user.id },
            select: { id: true, currency: true },
        });

        if (buyer.currency < shopItem.price) {
            return res.status(403).json({
                msg: 'You do not have enough money!',
            });
        }

        // Start a Prisma transaction to ensure atomicity
        await prisma.$transaction([
            deductBalance(buyer.id, shopItem.price),   // Deduct money from the buyer
            updateBalance(shopItem.playerId, shopItem.price),  // Update the seller's balance
            addMonsterToMenagerie(buyer.id, shopItem.monster.id),   // Transfer the monster from seller to buyer
            updateMonsterStatus(shopItem.monster.id, 'In_Menagerie'),   // Update the monster's status to 'In_Inventory'
            removeMonsterFromMenagerie(shopItem.playerId, shopItem.monster.id),  // Remove the monster from the seller's inventory
            removeListingFromShop(id),  // Remove item from the shop
        ]);

        return res.status(200).json({
            msg: 'Monster purchased successfully',
            data: {
                purchasedMonster: shopItem.monster,
            },
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};

const sellMonster = async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    const { price } = req.body;

    try {
        // Fetch the monster details
        const monster = await findMonsterById(id);

        if (monster.status === 'On_Market') {
            return res.status(403).json({
                msg: "Monster already marketed."
            });
        }

        // Create the shop item for the monster
        const shopItem = await createShopListing(id, user.id, price);

        await removeMonsterFromMenagerie(user.id, id)

        // Update the status of the monster to 'On_Market'
        await updateMonsterStatus(id, 'On_Market');

        return res.status(200).json({
            msg: 'Monster listed successfully',
            data: {
                listedMonster: shopItem,
            },
        });
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        });
    }
};

const cancelListing = async (req, res) => {
    const { id } = req.params; // Correct the destructuring
    const user = req.user;

    try {
        const listing = await prisma.shop.findUnique({
            where: { id: id }
        });

        if (!listing) {
            return res.status(404).json({ msg: "Listing not found." });
        }

        if (listing.playerId !== user.id) {
            return res.status(401).json({ msg: "You cannot cancel another person's listing." });
        }

        await removeListingFromShop(id)  // Remove item from the shop

        // Assuming the listing has a 'monsterId' field
        const monsterId = listing.monsterId; 

        await addMonsterToMenagerie(user.id, monsterId)

        if (!monsterId) {
            return res.status(400).json({ msg: "Invalid monster ID associated with this listing." });
        }

        // Check if the monster exists
        const monster = await prisma.monster.findUnique({
            where: { id: monsterId }
        });

        if (!monster) {
            return res.status(404).json({ msg: "Monster not found." });
        }

        // Update the status of the monster to 'In_Menagerie'
        await updateMonsterStatus(monsterId, 'In_Menagerie');

        return res.status(200).json({ msg: "Listing successfully canceled." });
    } catch (error) {
        // Add error handling to return a response in case of exceptions
        console.error(error);
        return res.status(500).json({ msg: "Internal server error." });
    }
};

const getShop = async (req, res) => {
    const { page = 1, pageSize = 10, type, species, rarity } = req.query

    const skip = (page - 1) * pageSize

    try {
        const filterOptions = {
            monster: {},
        }

        if (type) {
            filterOptions.monster.type = { contains: type }
        }

        if (species) {
            filterOptions.monster.species = { contains: species }
        }

        if (rarity) {
            filterOptions.monster.rarity = { contains: rarity }
        }

        const shopItems = await prisma.shop.findMany({
            take: pageSize,
            skip,
            where: filterOptions,
            include: {
                player: {
                    select: {
                        username: true,
                    },
                },
                monster: true,
            },
        })

        const totalItems = await prisma.shop.count({
            where: filterOptions,
        })

        const totalPages = Math.ceil(totalItems / pageSize)

        return res.status(200).json({
            msg: 'Shop items retrieved successfully',
            data: {
                shopItems,
                totalPages,
                currentPage: page,
            },
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

const sellItem = async (req, res) => {
    const user = req.user
    const { itemId, quantity } = req.body
    const response = await sellInventoryItem(user.id, itemId, quantity);
    return res.status(200).json({
        msg: response.msg,
        data: response.data,
    });
};

export { purchaseMonster, getShop, sellMonster, cancelListing, sellItem }
