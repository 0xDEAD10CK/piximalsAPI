import { Router } from "express";
const router = Router()

import { adventureLocation } from "../controllers/v1/adventure.js"
import authRoute from "../middleware/authRoute.js"

router.route("/location").get(authRoute, adventureLocation)

export default router