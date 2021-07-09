import axios from "axios";

const URL = "http://localhost/api/";

export default async function getWeatherForcast(city) {
  const res = await axios.get(`${URL}?query=${city}`, {
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    query: {
      city: city,
    },
  });

  console.log(res);
  return res;
}
