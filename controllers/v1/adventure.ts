/**
 * @file adventure.ts
 * @description Controller for zone and adventure-related actions in the game.
 */

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import {
  generateMonster,
  addMonsterToMenagerie,
  updateMonsterStatus,
  updateMonsterInZoneStatus,
} from '../../utils/monsters';
import {
  cleanUpZone,
  findMonsterInZone,
  findZone,
  generateZone,
} from '../../utils/zoning';
import { randomItem } from '../../utils/items';
import { findPlayer } from '../../utils/accountBalance';
import { addToInventory } from '../../utils/itemUtils';
import { getRandomInt } from '../../utils/utils';

const prisma = new PrismaClient();

const zoneGeneration = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const { monsterAmount } = req.body;
    const monsters = [];
    const items = [];

    const player = await prisma.account.findUnique({
      where: { id: user?.id },
      select: {
        location: {
          select: { id: true, type: true, rarity: true },
        },
      },
    });

    if (!player?.location) return res.status(404).json({ msg: 'Player location not found' });

    for (let i = 0; i < monsterAmount; i++) {
      monsters.push(generateMonster(player.location.type));
      items.push(randomItem(player.location));
    }

    const resolvedMonsters = await Promise.all(monsters);
    const resolvedItems = await Promise.all(items);

    const zone = await generateZone(
      'Dangerzone',
      player.location.type,
      user,
      'This is a dangerous zone',
      resolvedMonsters,
      resolvedItems
    );

    return res.status(200).json({ msg: 'Welcome to the Dangerzone', zone });
  } catch (error: any) {
    return res.status(500).json({ msg: error.message });
  }
};

const goToZone = async (req: Request, res: Response) => {
  try {
    const { zoneid } = req.params;
    const user = req.user;

    const zone = await prisma.zone.findUnique({ where: { id: zoneid } });
    if (!zone) return res.status(404).json({ msg: 'Zone not found' });

    const moveZone = await prisma.zone.update({
      where: { id: zoneid },
      data: { players: { connect: { id: user?.id } } },
    });

    return res.status(200).json({ msg: 'Welcome to the Dangerzone', zone: moveZone });
  } catch (error: any) {
    return res.status(500).json({ msg: error.message });
  }
};

const collect = async (req: Request, res: Response) => {
  try {
    const { zoneid } = req.params;
    const user = req.user;
    const { monsterId, itemId } = req.body;
    const data: any[] = [];

    await findZone(zoneid);
    await findPlayer(user.id);

    if (monsterId) {
      const monsterResponse = await addMonsterToMenagerie(user.id, monsterId);
      data.push(monsterResponse);
    }

    if (itemId) {
      const itemResponse = await addToInventory(user.id, itemId, 1);
      data.push(itemResponse);
    }

    return res.status(200).json({ msg: 'Added to inventory', data });
  } catch (error: any) {
    return res.status(500).json({ msg: error.message });
  }
};

const leaveZone = async (req: Request, res: Response) => {
  try {
    const { zoneid } = req.params;
    const user = req.user;
    const zone = await findZone(zoneid);

    if (!zone) return res.status(404).json({ msg: 'Zone not found' });

    const monsterPromises = zone.monsters
      .filter(monster => monster.status === 'CAUGHT')
      .map(async monster => {
        await updateMonsterInZoneStatus(zoneid, monster.id, 'In_Menagerie');
        return await addMonsterToMenagerie(user.id, monster.id);
      });

    const itemPromises = zone.items.map(item => addToInventory(user.id, item.id, 1));

    await Promise.all([...monsterPromises, ...itemPromises]);

    await cleanUpZone(zoneid);

    return res.status(200).json({ msg: 'Zone Deleted' });
  } catch (error: any) {
    return res.status(500).json({ msg: error.message });
  }
};

const zoneInfo = async (req: Request, res: Response) => {
  try {
    const { zoneid } = req.params;
    const zone = await findZone(zoneid);
    return res.status(200).json({ msg: 'Zone found', zone });
  } catch (error: any) {
    return res.status(500).json({ msg: error.message });
  }
};

const returnBattleResults = async (req: Request, res: Response) => {
  try {
    const { zoneId, monsterId, result } = req.body;
    const monster = await findMonsterInZone(zoneId, monsterId);

    if (!monster) return res.status(404).json({ msg: 'Monster not found' });

    if (result === 'CAUGHT') {
      await updateMonsterStatus(monsterId, 'CAUGHT');
      return res.status(200).json({ msg: 'Monster caught' });
    }

    if (result === 'DEAD') {
      await prisma.monster.delete({ where: { id: monsterId } });
      return res.status(200).json({ msg: 'Monster defeated' });
    }
  } catch (error: any) {
    return res.status(500).json({ msg: error.message });
  }
};

const setAllMonsterStatusCaught = async (req: Request, res: Response) => {
  try {
    const { zoneId } = req.params;
    const zone = await prisma.zone.findUnique({
      where: { id: zoneId },
      include: { monsters: true },
    });

    if (!zone) return res.status(404).json({ msg: 'Zone not found' });

    await Promise.all(
      zone.monsters.map(monster =>
        prisma.monster.update({
          where: { id: monster.id },
          data: { status: 'CAUGHT' },
        })
      )
    );

    const updatedZone = await prisma.zone.findUnique({
      where: { id: zoneId },
      include: { monsters: true },
    });

    return res.status(200).json({ msg: 'All monsters caught', zone: updatedZone });
  } catch (error: any) {
    return res.status(500).json({ msg: error.message });
  }
};

const search = async (req: Request, res: Response) => {
  const { zoneid } = req.params;
  const user = req.user;
  try {
    const player = await prisma.account.findUnique({
      where: { id: user.id },
      select: {
        location: {
          select: { id: true, type: true, rarity: true },
        },
      },
    });

    if (!player?.location) return res.status(404).json({ msg: 'Player location not found' });

    const zone = await prisma.zone.findUnique({ where: { id: zoneid } });
    if (!zone) return res.status(404).json({ msg: 'Zone not found' });

    const monster = await generateMonster(player.location.type);
    const items = await Promise.all(
      Array.from({ length: getRandomInt(2, 5) }, () => randomItem(player.location))
    );

    const updatedZone = await prisma.zone.update({
      where: { id: zoneid },
      data: {
        monsters: { connect: { id: monster.id } },
        items: { connect: items.map(item => ({ id: item.id })) },
      },
    });

    return res.status(200).json({ msg: 'Monster found', monster, zone });
  } catch (error: any) {
    return res.status(500).json({ msg: error.message });
  }
};

export {
  zoneGeneration,
  goToZone,
  leaveZone,
  zoneInfo,
  collect,
  search,
  setAllMonsterStatusCaught,
  returnBattleResults,
};
