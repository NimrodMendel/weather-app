const { getForecast } = require("../Models/weather.model");

const getWeatherForcast = async (req, res) => {
  const { city } = req.params;

  try {
    const data = await getForecast(city);
    res.send(data);
  } catch (err) {
    console.error(err, err.stack);
    res.send({ err: err });
  }
};

module.exports = { getWeatherForcast };
