import { Router } from "express";
const router = Router();

import { generateMonster } from "../controllers/v1/monster.js";
import authRoute from "../middleware/authRoute.js"

router.route("/generate").post(authRoute, generateMonster);

export default router;