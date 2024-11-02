/**
 * @file zoning.js
 * @description This file contains the functions to generate and clean up zones.
 * @module utils/zoning
 * @requires PrismaClient
 */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Create Zone
 * 
 * @param {string} name             - ZoneName
 * @param {monster[{}]} monsters    - An array of MonsterObjects
 * @param {string} type             - The zone type from the players location
 * @param {account} user            - Passes userobject for the id  
 * @param {string} description      - The description of the zone (Will probably be the items type and monsters)
 * @param {items[{}]} items         - An array of Item objects 
 * @returns {Zone} Returns the newly created zone object
 */
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
        return res.status(500).json({msg: error})
    }
}

/**
 * Deleting a zone
 * 
 * @param {string} zoneid - Takes a zoneid and then deletes it
 * @returns deleted zone message
 */
export const cleanUpZone = async (zoneid) => {
    try {
        const deleteZone = await prisma.zone.delete({
            where: {
                id: zoneid
            }
        })
        
        return deleteZone;
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}

/**
 * 
 * @param {string} zoneid Takes zoneid and finds zone data
 * @returns zone with monsters and items data
 */
export const findZone = async (zoneid) => {
    try {
        const zone = await prisma.zone.findUnique({
            where: {
                id: zoneid
            },
            select: {
                monsters: true,
                items: true
            }
        })        
        
        if (!zone){
            return res.status(404).json({msg: "Zone does not exist"})
        }

        return zone
    } catch (error) {
        return res.status(500).json({msg: error})
    }
}