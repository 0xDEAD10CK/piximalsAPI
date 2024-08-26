import { Router } from "express";
const router = Router();

import { getPlayerInfo } from "../controllers/v1/player.js";
import authRoute from "../middleware/authRoute.js"

router.route("/account").get(authRoute, getPlayerInfo);

export default router;