import { Router } from "express";
const router = Router()

import { goToZone, zoneGeneration, deleteZone, collect } from "../controllers/v1/adventure.js"
import authRoute from "../middleware/authRoute.js"
import { createQuest } from "../controllers/v1/quest.js";

router.route("/zone").post(authRoute, zoneGeneration)
router.route("/zone/:zoneid").delete(authRoute, deleteZone).put(authRoute, collect)
router.route("/goToZone/:zoneid").put(authRoute, goToZone)
router.route("/quest").post(authRoute, createQuest)
export default router