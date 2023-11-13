import { Router } from "express";
const router = Router();

import { cancelListing, getShop, purchaseMonster, sellMonster } from "../controllers/v1/shop.js";
import authRoute from "../middleware/authRoute.js"

router.route("/purchase/:id").post(authRoute, purchaseMonster);
router.route("/sell/:id").post(authRoute, sellMonster);
router.route("/cancel/:id").post(authRoute, cancelListing);
router.route("/view").get(getShop)

export default router;