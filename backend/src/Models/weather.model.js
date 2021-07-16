const axios = require("axios");
const searchURL = "https://www.metaweather.com/api/location/search";
const forecastURL = "https://www.metaweather.com/api/location";

const getCityWoeid = async (city) => {
  const { data } = await await axios.get(`${searchURL}/?query=${city}`);

  if (data.length > 0) {
    return data[0].woeid;
  }

  return null;
};

const getForecast = async (city) => {
  const woeid = await getCityWoeid(city);

  if (!woeid) {
    return { error: `Can't get data for: ${city}` };
  }
  const { data } = await axios.get(`${forecastURL}/${woeid}`);
  return data;
};

module.exports = { getForecast, getCityWoeid };
