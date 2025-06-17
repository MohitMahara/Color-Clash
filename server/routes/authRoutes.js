import { Router } from "express";
import { registerController, loginController } from "../controllers/authControllers.js";

const router = Router();

// Auth Routes

router.post("/register", registerController);

router.post("/login", loginController);

export default router;