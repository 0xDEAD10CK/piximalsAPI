import { Router } from "express";
const router = Router()

import { goToZone, zoneGeneration, leaveZone, collect, search, zoneInfo, returnBattleResults } from "../controllers/v1/adventure.js"
import authRoute from "../middleware/authRoute.js"
import { createQuest } from "../controllers/v1/quest.js";

router.route("/zone").post(authRoute, zoneGeneration)
router.route("/zone/:zoneid").delete(authRoute, leaveZone).put(authRoute, collect).get(authRoute, zoneInfo)
router.route("/goToZone/:zoneid").put(authRoute, goToZone)
router.route("/quest").post(authRoute, createQuest)
router.route("/search/:zoneid").get(authRoute, search)
router.route("/battle/results").post(authRoute, returnBattleResults)
export default router