import { Router } from "express";
const router = Router();

import { getItems } from "../controllers/v1/item.js";
import authRoute from "../middleware/authRoute.js"

router.route("/get").get(authRoute, getItems);

export default router;