import { Router } from "express";
const router = Router()

import { adventureLocation, zoneGeneration } from "../controllers/v1/adventure.js"
import authRoute from "../middleware/authRoute.js"

router.route("/location").get(authRoute, adventureLocation)
router.route("/zone").post(authRoute, zoneGeneration)

export default router