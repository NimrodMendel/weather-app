import React, { useState } from "react";
import { LocationForm } from "./Components/LocationForm/Form";
import { ApplicationBar } from "./Components/ApplicationBar/ApplicationBar";
import { ErrorMessage } from "./Components/ErrorMessage/ErrorMessage";
import { Spinner } from "./Components/Spinner/Spinner";
import { Forecast } from "./Components/Forecast/Forecast";
import getWeatherForcast from "./Lib/api";
import Grid from "@material-ui/core/Grid/Grid";

function App() {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getForecast = async (city) => {
    setLoading(true);
    setError("");
    setForecast([]);
    const data = await getWeatherForcast(city);

    if (!data) {
      setError(`Couldn't get forecast for: ${city}`);
      setForecast({});
    } else {
      setForecast(data.consolidated_weather);
      setError("");
    }
    setLoading(false);
  };

  return (
    <>
      <ApplicationBar />
      <LocationForm getForecast={getForecast} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {loading && (
          <Grid item>
            <Spinner />
          </Grid>
        )}
        {error && (
          <Grid item>
            <ErrorMessage error={error} />
          </Grid>
        )}
        {forecast.length > 0 && (
          <Grid item>
            <Forecast forecast={forecast} />{" "}
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default App;
