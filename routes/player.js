import { Router } from "express";
const router = Router();

import { getPlayerInfo, getAllUsers } from "../controllers/v1/player.js";
import authRoute from "../middleware/authRoute.js"

router.route("/account").post(authRoute, getPlayerInfo);
router.route("/allusers").get(getAllUsers);

export default router;