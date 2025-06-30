// routes/v1/auth.ts
import { Router } from "express";
import { register, login } from "../controllers/v1/auth.ts";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);

export default router;
