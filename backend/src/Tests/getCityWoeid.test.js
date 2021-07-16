const { getCityWoeid } = require("../Models/weather.model");

test("Expect woeid of London to be ", async () => {
  const city = "London";
  const woeid = await getCityWoeid(city);

  expect(woeid).toBe(44418);
});

test("Expect woeids of London and london to be the same", async () => {
  const upperCaseCity = "London";
  const lowerCaseCity = "london";

  const upperCaseWoeid = await getCityWoeid(upperCaseCity);
  const lowerCaseWoeid = await getCityWoeid(lowerCaseCity);

  expect(upperCaseWoeid).toEqual(lowerCaseWoeid);
});

test("Expect woeid of Beirut to be null", async () => {
  const city = "Beirut";
  const woeid = await getCityWoeid(city);

  expect(woeid).toBe(null);
});
