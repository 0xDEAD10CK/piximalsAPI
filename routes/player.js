import { Router } from "express";
const router = Router();

import { getPlayerInfo, getInventory, addItemToInventory, getMenagerie, changePartyStatus, changeLocation } from "../controllers/v1/player.js";
import authRoute from "../middleware/authRoute.js"
import { collectStarter, getStarter } from "../controllers/v1/starter.js";

router.route("/account").get(authRoute, getPlayerInfo);
router.route("/location").put(authRoute, changeLocation)
router.route("/inventory").get(authRoute, getInventory);
router.route("/menagerie").get(authRoute, getMenagerie).put(authRoute, changePartyStatus);;
router.route("/inventory/add").post(authRoute, addItemToInventory);
router.route("/starter").get(authRoute, getStarter).post(authRoute, collectStarter)
export default router;