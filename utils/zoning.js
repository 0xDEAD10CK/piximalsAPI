/**
 * @file zoning.js
 * @description This file contains the functions to generate and clean up zones.
 * @module utils/zoning
 * @requires PrismaClient
 */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const generateZone = async (name, monsters, type, user, description, items) => {
    try {
        
        const zone = await prisma.zone.create({
            data: {
                zonename: name,
                type: type,
                description: description,
                players: {
                    connect: {id: user.id}
                },
                monsters: {
                    connect: monsters.map(monster => {
                        return {id: monster.id}
                    })
                },
                items: {
                    connect: items.map(item => {
                        return {id: item.id}
                    })
                }
        },
        select: {
            id: true,
            zonename: true,
            type: true,
            description: true,
            players: {
                select: {
                    id: true,
                    username: true
                }
            },
            monsters: {
                select: {
                    id: true,
                    name: true,
                    type: true,
                    species: true,
                    rarity: true,
                    status: true,
                    url: true,
                    hp: true,
                    ap: true
                }
            },
            items: {
                select: {
                    id: true,
                    name: true,
                    effects: true,
                    type: true,
                    sellPrice: true
                }
            }
        }
    })
    
    return zone;
    } catch (error) {
        console.log(error)        
    }
}

export const cleanUpZone = async (zoneid) => {
    const deleteZone = await prisma.zone.delete({
        where: {
            id: zoneid
        }
    })

    return deleteZone;
}

export const findZone = async (zoneid) => {
    const zone = await prisma.zone.findUnique({
        where: {
            id: zoneid
        },
        select: {
            monsters: true
        }
    })

    if (!zone){
        return res.status(404).json({msg: "Zone does not exist"})
    }

    return zone
}