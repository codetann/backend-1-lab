const express = require("express");
const router = express.Router();
const { weather } = require("../controllers");

router.get("/", weather.temp);

module.exports = router;
