import axios from "axios";

const URL = "http://localhost:5000/api/weather";

export default async function getWeatherForcast(city) {
  const { data } = await axios.get(`${URL}/${city}`, {
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  });

  return data;
}
