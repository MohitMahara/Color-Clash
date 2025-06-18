import { Router } from "express";
const router = Router();

import { getHistoryController, getUserHistoryController, getWinningColorController, startGameController}  from "../controllers/gameControllers.js";

router.post("/bet", startGameController);

router.get("/winner/:round", getWinningColorController);

router.get("/history", getHistoryController);

router.get("/history/:userId", getUserHistoryController);



export default router;