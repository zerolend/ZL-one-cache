const { Router } = require("express");
const { getReserveData } = require("./controller/reserves");

const router = Router();

router.get("/", getReserveData);

module.exports = router;
