import { Router } from "express";
const router = Router();

import { purchaseMonster } from "../controllers/v1/shop.js";
import authRoute from "../middleware/authRoute.js"

router.route("/purchase").post(authRoute, purchaseMonster);

export default router;