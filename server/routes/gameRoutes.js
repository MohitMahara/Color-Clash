import { Router } from "express";
const router = Router();

import { getWinningColorController, startGameController}  from "../controllers/gameControllers.js";

router.post("/bet", startGameController);

router.get("/winner/:round", getWinningColorController);


export default router;