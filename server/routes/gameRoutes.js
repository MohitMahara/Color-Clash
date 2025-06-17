import { Router } from "express";
const router = Router();

import { startGameController}  from "../controllers/gameControllers.js";

router.post("/bet", startGameController);


export default router;