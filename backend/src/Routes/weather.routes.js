const express = require("express");
const router = express.Router();

const { getWeatherForcast } = require("../Controllers/weather.controller");

router.get("/:city", getWeatherForcast);

module.exports = router;
