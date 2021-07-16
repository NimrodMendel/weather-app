import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Today } from "../Today/Today";
import { WeatherCard } from "../WeatherCard/WeatherCard";

const useStyles = makeStyles((theme) => ({
  daysForecast: {
    marginTop: theme.spacing(4),
  },
  heading: {
    marginTop: theme.spacing(5),
    textAlign: "center",
  },
}));

export const Forecast = ({ forecast }) => {
  const classes = useStyles();
  const futureForecast = forecast.slice(1, 4);

  return (
    <>
      <Typography className={classes.heading} variant="h4">
        Today's forecast:
      </Typography>
      <Today todaysForecast={forecast[0]} />
      <Typography className={classes.heading} variant="h4">
        Forecast for the next days:
      </Typography>
      <Grid
        container
        className={classes.daysForecast}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={6}
      >
        {futureForecast.map((day, idx) => (
          <Grid item>
            <WeatherCard key={idx} forecast={day} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
