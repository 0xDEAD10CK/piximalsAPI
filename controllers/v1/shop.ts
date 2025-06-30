import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import {
    sellInventoryItem,
    removeListingFromShop,
    createShopListing
} from '../../utils/shopUtils';

import { 
    deductBalance,
    updateBalance,
} from '../../utils/accountBalance';

import {
    addMonsterToMenagerie,
    updateMonsterStatus,
    removeMonsterFromMenagerie,
    findMonsterById
} from '../../utils/monsters';
import { Request, Response } from 'express';
import { isAuthenticated } from '../../utils/isAuthenticated';

const purchaseMonster = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        res.status(401).json({ msg: 'Unauthorized'})
        return 
    }
      
    const { id } = req.params;
    const user = req.user;

    try {
        const shopItem = await prisma.shop.findUnique({
            where: { id },
            include: { monster: true }, 
        });

        if (!shopItem || !shopItem.monster) {
            res.status(404).json({ msg: 'Shop item or monster not found' });
            return 
        }

        const buyer = await prisma.account.findUnique({
            where: { id: user.id },
            select: { id: true, currency: true },
        });

        if (!buyer) {
            res.status(404).json({ msg: 'Buyer account not found' });
            return 
        }

        if (buyer.currency < shopItem.price) {
            res.status(403).json({
                msg: 'You do not have enough money!',
            });
            return 
        }

        // Start a Prisma transaction to ensure atomicity
        await prisma.$transaction([
            deductBalance(buyer.id, shopItem.price),   // Deduct money from the buyer
            updateBalance(shopItem.playerId, shopItem.price),  // Update the seller's balance
            updateMonsterStatus(shopItem.monster.id, 'In_Menagerie'),   // Update the monster's status to 'In_Inventory'
            addMonsterToMenagerie(buyer.id, shopItem.monster.id),   // Transfer the monster from seller to buyer
            updateMonsterStatus(shopItem.monster.id, 'IN_MENAGERIE'),   // Update the monster's status to 'In_Inventory'
            removeMonsterFromMenagerie(shopItem.playerId, shopItem.monster.id),  // Remove the monster from the seller's inventory
            removeListingFromShop(id),  // Remove item from the shop
        ]);

        res.status(200).json({
            msg: 'Monster purchased successfully',
            data: {
                purchasedMonster: shopItem.monster,
            },
        });
        return 
    } catch (err:any) {
        res.status(500).json({
            msg: err.message,
        });
        return 
    }
};

const sellMonster = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        res.status(401).json({ msg: 'Unauthorized'})
        return 
    }

    const { id } = req.params;
    const user = req.user;
    const { price } = req.body;

    try {
        // Fetch the monster details
        const monster = await findMonsterById(id);

        if (!monster) {
            res.status(400).json({
                msg: "Monster Not Found"
            })
            return 
        }

        if (monster.status === 'ON_MARKET') {
            res.status(403).json({
                msg: "Monster already marketed."
            });
            return 
        }

        // Create the shop item for the monster
        const shopItem = await createShopListing(id, user.id, price);

        await removeMonsterFromMenagerie(user.id, id)

        // Update the status of the monster to 'ON_MARKET'
        await updateMonsterStatus(id, 'ON_MARKET');

        res.status(200).json({
            msg: 'Monster listed successfully',
            data: {
                listedMonster: shopItem,
            },
        });
        return 
    } catch (err: any) {
        res.status(500).json({
            msg: err.message,
        });
        return 
    }
};

const cancelListing = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        res.status(401).json({ msg: 'Unauthorized'})
        return 
    }

    const { id } = req.params; 
    const user = req.user;

    try {
        const listing = await prisma.shop.findUnique({
            where: { id: id }
        });

        if (!listing) {
            res.status(404).json({ msg: "Listing not found." });
            return 
        }

        if (listing.playerId !== user.id) {
            res.status(401).json({ msg: "You cannot cancel another person's listing." });
            return 
        }

        await removeListingFromShop(id)  // Remove item from the shop

        // Assuming the listing has a 'monsterId' field
        const monsterId = listing.monsterId; 

        await addMonsterToMenagerie(user.id, monsterId)

        if (!monsterId) {
            res.status(400).json({ msg: "Invalid monster ID associated with this listing." });
            return 
        }

        // Check if the monster exists
        const monster = await prisma.monster.findUnique({
            where: { id: monsterId }
        });

        if (!monster) {
            res.status(404).json({ msg: "Monster not found." });
            return 
        }

        await updateMonsterStatus(monsterId, 'IN_MENAGERIE');

        res.status(200).json({ msg: "Listing successfully canceled." });
        return 
    } catch (error) {
        res.status(500).json({ msg: "Internal server error." });
        return 
    }
};

interface ShopQuery {
    page?: number;
    pageSize?: number;
    type?: string;
    species?: string;
    rarity?: string;
}

const getShop = async (req: Request<{}, {}, {}, ShopQuery>, res: Response) => {
    const { page = 1, pageSize = 10, type, species, rarity } = req.query

    const skip = (page - 1) * pageSize

    try {
        const filterOptions:any = {
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

        res.status(200).json({
            msg: 'Shop items retrieved successfully',
            data: {
                shopItems,
                totalItems,
                totalPages,
                currentPage: page,
            },
        })
        return 
    } catch (err:any) {
        res.status(500).json({
            msg: err.message,
        })
        return 
    }
}

const sellItem = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        res.status(401).json({ msg: 'Unauthorized'})
        return 
    }
    const user = req.user
    const { itemId, quantity } = req.body
    const response = await sellInventoryItem(user.id, itemId, quantity);
    res.status(200).json({
        msg: response.msg,
        data: response.data,
    });
    return 
};

export { purchaseMonster, getShop, sellMonster, cancelListing, sellItem }
