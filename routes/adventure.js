import { Router } from "express";
const router = Router()

import { goToZone, zoneGeneration, deleteZone, collect, search, zoneInfo } from "../controllers/v1/adventure.js"
import authRoute from "../middleware/authRoute.js"

router.route("/zone").post(authRoute, zoneGeneration)
router.route("/zone/:zoneid").delete(authRoute, deleteZone).put(authRoute, collect).get(authRoute, zoneInfo)
router.route("/goToZone/:zoneid").put(authRoute, goToZone)
router.route("/search/:zoneid").get(authRoute, search)
export default router