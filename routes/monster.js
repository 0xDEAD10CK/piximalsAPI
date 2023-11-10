import { Router } from "express";
const router = Router();

import { generateMonster } from "../controllers/v1/monster.js";

router.route("/generate").post(generateMonster);

export default router;