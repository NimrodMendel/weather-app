const axios = require("axios");
const searchURL = "https://www.metaweather.com/api/location/search";
const forecastURL = "https://www.metaweather.com/api/location";

const getCityWoeid = async (city) => {
  try {
    const { data } = await axios.get(`${searchURL}/?query=${city}`);
    return data[0].woeid;
  } catch (err) {
    console.error(err, err.stack);
    return;
  }
};

const getForecast = async (city) => {
  try {
    const woeid = await getCityWoeid(city);
    const { data } = await axios.get(`${forecastURL}/${woeid}`);
    return data;
  } catch (err) {
    console.error(err, err.stack);
    return;
  }
};

module.exports = { getForecast };
