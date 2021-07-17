import { render, cleanup } from "@testing-library/react";
import { WeatherCard } from "../../WeatherCard/WeatherCard";
import { Forecast } from "../Forecast";

describe("Test suite for the Forecast component", () => {
  afterEach(() => {
    cleanup();
  });

  test("Check rendering of the component", () => {
    const forecasts = [
      {
        applicable_date: "2021-07-17",
        humidity: 45,
        max_temp: 25.4444,
        min_temp: 13.3424,
        the_temp: 21,
        weather_state_name: "Sunny",
      },
      {
        applicable_date: "2021-07-18",
        humidity: 21,
        max_temp: 22.2314,
        min_temp: 12.3424,
        the_temp: 19,
        weather_state_name: "Cloudy",
      },
      {
        applicable_date: "2021-07-19",
        humidity: 76,
        max_temp: 32,
        min_temp: 28,
        the_temp: 30,
        weather_state_name: "Sunny",
      },
      {
        applicable_date: "2021-07-20",
        humidity: 70,
        max_temp: 30,
        min_temp: 28,
        the_temp: 29,
        weather_state_name: "Sunny",
      },
    ];

    const { getByTestId } = render(<Forecast forecast={forecasts} />);
    const today = getByTestId("today");
    const futureForecast = getByTestId("forecasts");

    expect(today).toBeInTheDocument();
    expect(futureForecast).toBeInTheDocument();
  });

  test("Check for the number of weather cards rendered", () => {
    const forecasts = [
      {
        applicable_date: "2021-07-17",
        humidity: 45,
        max_temp: 25.4444,
        min_temp: 13.3424,
        the_temp: 21,
        weather_state_name: "Sunny",
      },
      {
        applicable_date: "2021-07-18",
        humidity: 21,
        max_temp: 22.2314,
        min_temp: 12.3424,
        the_temp: 19,
        weather_state_name: "Cloudy",
      },
      {
        applicable_date: "2021-07-19",
        humidity: 76,
        max_temp: 32,
        min_temp: 28,
        the_temp: 30,
        weather_state_name: "Sunny",
      },
      {
        applicable_date: "2021-07-20",
        humidity: 70,
        max_temp: 30,
        min_temp: 28,
        the_temp: 29,
        weather_state_name: "Sunny",
      },
    ];

    const { getAllByTestId } = render(<Forecast forecast={forecasts} />);
    const futureForecast = getAllByTestId("future-forecast");

    expect(futureForecast).toHaveLength(3);
  });
});
