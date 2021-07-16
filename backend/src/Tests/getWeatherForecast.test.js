const { getForecast } = require("../Models/weather.model");

test("Expect running getWeatherForecast with London to produce a value", async () => {
  const city = "London";
  const data = await getForecast(city);

  expect(data.consolidated_weather).toBeTruthy();
});

test("Expect running getWeatherForecast with manchester to produce a value", async () => {
  const city = "manchester";
  const data = await getForecast(city);

  expect(data.consolidated_weather).toBeTruthy();
});

test("Expect running getWeatherForecast with Tel Aviv to return an error", async () => {
  const city = "Tel Aviv";
  const data = await getForecast(city);

  expect(data.error).toBe(`Can't get data for: ${city}`);
});
