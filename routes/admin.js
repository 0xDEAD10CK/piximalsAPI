import { Router } from "express";
const router = Router();

import { getItems, getRandomItem } from "../controllers/v1/item.js";
import { getAllUsers } from "../controllers/v1/admin.js";
import { getAbilities } from "../controllers/v1/abilities.js";
import { generateMonster, getMonsters } from "../controllers/v1/monster.js";
import { setAllMonsterStatusCaught } from "../controllers/v1/adventure.js";

import authRoute from "../middleware/authRoute.js"

// User Routes
router.route("/users").get(authRoute, getAllUsers);

// Item Routes
router.route("/item/get").get(authRoute, getItems);
router.route("/item/getRandom").get(authRoute, getRandomItem);

// Ability Routes
router.route("/ability/get").get(authRoute, getAbilities);

// Monster Routes
router.route("/monster/generate").get(authRoute, generateMonster);
router.route("/monster/get").get(authRoute, getMonsters);

// Zone Routes
router.route("/zone/:zoneId").put(authRoute, setAllMonsterStatusCaught);

export default router;