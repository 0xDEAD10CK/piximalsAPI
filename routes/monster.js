import { Router } from "express";
const router = Router();

import { generateMonster, getMonsters } from "../controllers/v1/monster.js";
import authRoute from "../middleware/authRoute.js"

router.route("/generate").get(authRoute, generateMonster);
router.route("/get").get(authRoute, getMonsters);

export default router;