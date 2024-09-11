import { Router } from "express";
const router = Router();

import { getItems, getRandomItem } from "../controllers/v1/item.js";
import authRoute from "../middleware/authRoute.js"

router.route("/get").get(authRoute, getItems);
router.route("/getRandom").get(authRoute, getRandomItem);

export default router;