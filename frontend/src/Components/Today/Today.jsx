import React from "react";
import { WeatherCard } from "../WeatherCard/WeatherCard";

export const Today = ({ todaysForecast }) => {
  return (
    <>
      <WeatherCard forecast={todaysForecast} />
    </>
  );
};
