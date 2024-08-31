import { Router } from "express";
const router = Router()

import { adventureLocation, goToZone, zoneGeneration } from "../controllers/v1/adventure.js"
import authRoute from "../middleware/authRoute.js"

router.route("/location").get(authRoute, adventureLocation)
router.route("/zone").post(authRoute, zoneGeneration)
router.route("/zone/:zoneid").put(authRoute, goToZone)
export default router