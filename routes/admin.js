import { Router } from "express";
const router = Router();

import { getAllUsers } from "../controllers/v1/admin.js";

router.route("/users").get(getAllUsers);

export default router;