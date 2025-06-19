import { Router } from "express";
const router = Router();

import { getPlayerInfo,
        getUserInventory,
        getUserMenagerie,
        addItemToInventory,
        moveMonsterToParty,
        moveMonsterFromParty,
        changePartyStatus,
        changeLocation } from "../controllers/v1/player.js";

import authRoute from "../middleware/authRoute.js"
import { collectStarter, getStarter } from "../controllers/v1/starter.js";

router.route("/account").get(authRoute, getPlayerInfo);

router.route("/inventory").get(authRoute, getUserInventory);
router.route("/menagerie").get(authRoute, getUserMenagerie);
router.route("/location").put(authRoute, changeLocation)

router.route("/inventory/add").post(authRoute, addItemToInventory);

router.route("/party/add/:monsterId").post(authRoute, moveMonsterToParty);
router.route("/party/remove/:monsterId").post(authRoute, moveMonsterFromParty);

router.route("/starter").get(authRoute, getStarter).post(authRoute, collectStarter)

export default router;