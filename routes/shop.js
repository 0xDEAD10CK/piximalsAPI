import { Router } from "express";
const router = Router();

import { getShop, purchaseMonster } from "../controllers/v1/shop.js";
import authRoute from "../middleware/authRoute.js"

router.route("/purchase/:id").post(authRoute, purchaseMonster);
router.route("/view").get(getShop)

export default router;