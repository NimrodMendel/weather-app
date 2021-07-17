import { render, cleanup } from "@testing-library/react";
import { WeatherCard } from "../WeatherCard";

describe("Test suite for the WeatherCard component", () => {
  afterEach(() => {
    cleanup();
  });

  test("Check rendering of the card", () => {
    const forecast = {
      applicable_date: "2021-07-17",
      humidity: 45,
      max_temp: 25.4444,
      min_temp: 13.3424,
      the_temp: 21,
      weather_state_name: "Sunny",
    };
    const { getByTestId } = render(<WeatherCard forecast={forecast} />);
    const weatherCard = getByTestId("weather-card");

    expect(weatherCard).toBeInTheDocument();
  });

  test("Check rendering of the card with hot weather data", () => {
    const forecast = {
      applicable_date: "2021-07-17",
      humidity: 45,
      max_temp: 25.4444,
      min_temp: 13.3424,
      the_temp: 24,
      weather_state_name: "Sunny",
    };

    const { getByTestId } = render(<WeatherCard forecast={forecast} />);

    const date = getByTestId("date");
    const maxTemp = getByTestId("max-temp");
    const minTemp = getByTestId("min-temp");
    const weatherStateName = getByTestId("state-name");
    const humidity = getByTestId("humidity");
    const temp = getByTestId("temp");
    const sunIcon = getByTestId("sun-icon");

    expect(date).toHaveTextContent(
      new Date(forecast.applicable_date).toDateString()
    );
    expect(maxTemp).toHaveTextContent(Math.floor(forecast.max_temp));
    expect(minTemp).toHaveTextContent(Math.floor(forecast.min_temp));
    expect(weatherStateName).toHaveTextContent(forecast.weather_state_name);
    expect(humidity).toHaveTextContent(forecast.humidity);
    expect(temp).toHaveTextContent(Math.floor(forecast.the_temp));
    expect(sunIcon).toBeInTheDocument();
  });

  test("Check rendering of the card with cold weather data", () => {
    const forecast = {
      applicable_date: "2021-07-17",
      humidity: 45,
      max_temp: 25.4444,
      min_temp: 13.3424,
      the_temp: 21,
      weather_state_name: "Rainy",
    };

    const { getByTestId } = render(<WeatherCard forecast={forecast} />);

    const date = getByTestId("date");
    const maxTemp = getByTestId("max-temp");
    const minTemp = getByTestId("min-temp");
    const weatherStateName = getByTestId("state-name");
    const humidity = getByTestId("humidity");
    const temp = getByTestId("temp");
    const rainIcon = getByTestId("rain-icon");

    expect(date).toHaveTextContent(
      new Date(forecast.applicable_date).toDateString()
    );
    expect(maxTemp).toHaveTextContent(Math.floor(forecast.max_temp));
    expect(minTemp).toHaveTextContent(Math.floor(forecast.min_temp));
    expect(weatherStateName).toHaveTextContent(forecast.weather_state_name);
    expect(humidity).toHaveTextContent(forecast.humidity);
    expect(temp).toHaveTextContent(Math.floor(forecast.the_temp));
    expect(rainIcon).toBeInTheDocument();
  });

  test("Check styling for hot weather", () => {
    const forecast = {
      applicable_date: "2021-07-17",
      humidity: 45,
      max_temp: 25.4444,
      min_temp: 13.3424,
      the_temp: 24,
      weather_state_name: "Sunny",
    };

    const weatherClass = "makeStyles-hotWeather-20";

    const { getByTestId } = render(<WeatherCard forecast={forecast} />);

    const temp = getByTestId("temp");
    expect(temp).toHaveClass(weatherClass);
  });

  test("Check styling for cold weather", () => {
    const forecast = {
      applicable_date: "2021-07-17",
      humidity: 45,
      max_temp: 25.4444,
      min_temp: 13.3424,
      the_temp: 21,
      weather_state_name: "Cloudy",
    };

    const weatherClass = "makeStyles-coldWeather-27";

    const { getByTestId } = render(<WeatherCard forecast={forecast} />);

    const temp = getByTestId("temp");
    expect(temp).toHaveClass(weatherClass);
  });
});
