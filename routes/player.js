import { Router } from "express";
const router = Router();

import { getPlayerInfo, getUserInventory, getUserMenagerie, addItemToInventory, moveMonsterToParty, moveMonsterFromParty } from "../controllers/v1/player.js";
import authRoute from "../middleware/authRoute.js"

router.route("/account").get(authRoute, getPlayerInfo);
router.route("/inventory").get(authRoute, getUserInventory);
router.route("/menagerie").get(authRoute, getUserMenagerie);

router.route("/inventory/add").post(authRoute, addItemToInventory);

router.route("/party/add/:monsterId").post(authRoute, moveMonsterToParty);
router.route("/party/remove/:monsterId").post(authRoute, moveMonsterFromParty);

export default router;