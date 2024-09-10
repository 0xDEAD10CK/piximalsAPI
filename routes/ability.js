import { Router } from "express";
const router = Router();

import { getAbilities } from '../controllers/v1/abilities.js'

router.route("/get").get(getAbilities);

export default router;