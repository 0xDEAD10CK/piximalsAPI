import { Item, Monster, Zone } from "@prisma/client";

export type ZoneWithDetails = Zone & {
    monsters: Monster[];
    items: Item[];
}