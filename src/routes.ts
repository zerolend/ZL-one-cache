import { Router } from "express";

import { getReserveData } from "./controller/reserves";

export const router = Router();

router.get("/", getReserveData);

export default router;
