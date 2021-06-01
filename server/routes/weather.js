const express = require("express");
const router = express.Router();
const { weather } = require("../controllers");

router.get("/:temperature", weather.temp);

module.exports = router;
