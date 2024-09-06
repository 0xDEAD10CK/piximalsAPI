import { Router } from "express";
const router = Router();

import { getShop, purchaseMonster, sellItem } from "../controllers/v1/shop.js";
import authRoute from "../middleware/authRoute.js"

router.route("/purchase/:id").post(authRoute, purchaseMonster);
router.route("/view").get(authRoute, getShop)
router.route("/sell").post(authRoute, sellItem)

export default router;