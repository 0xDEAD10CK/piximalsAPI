import { Router } from "express";
const router = Router();

import { getPlayerInfo, getInventory, addItemToInventory, getMenagerie, changePartyStatus } from "../controllers/v1/player.js";
import authRoute from "../middleware/authRoute.js"

router.route("/account").get(authRoute, getPlayerInfo);
router.route("/inventory").get(authRoute, getInventory);
router.route("/menagerie").get(authRoute, getMenagerie).put(authRoute, changePartyStatus);;
router.route("/inventory/add").post(authRoute, addItemToInventory);

export default router;