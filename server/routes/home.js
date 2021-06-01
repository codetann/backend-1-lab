const express = require("express");
const router = express.Router();
const { home } = require("../controllers");

router.get("/", home.render);

module.exports = router;
