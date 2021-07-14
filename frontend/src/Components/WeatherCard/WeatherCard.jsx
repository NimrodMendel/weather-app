import React from "react";
import { makeStyles } from "@material-ui/core";
import { WiHumidity } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiThermometerExterior } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiRainMix } from "react-icons/wi";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    textAlign: "center",
    background: "#F9F9F9",
  },
  hotWeather: {
    color: "#CD113B",
  },
  coldWeather: {
    color: "#39A2DB",
  },
  img: {
    width: "50%",
    height: "50%",
    marginBottom: theme.spacing(3),
  },
  icon: {
    width: 50,
    height: 70,
  },
  weatherInfo: {
    marginTop: theme.spacing(2),
  },
}));

export const WeatherCard = ({ forecast }) => {
  const classes = useStyles();
  const {
    applicable_date,
    humidity,
    max_temp,
    min_temp,
    the_temp,
    weather_state_name,
  } = forecast;
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              {the_temp >= 23 ? (
                <WiDaySunny className={classes.icon} />
              ) : (
                <WiRainMix className={classes.icon} />
              )}
              <Typography variant="h5" component="h2">
                {new Date(applicable_date).toDateString()}
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                className={
                  the_temp >= 23 ? classes.hotWeather : classes.coldWeather
                }
              >
                <em>{Math.floor(the_temp)}</em>
              </Typography>
              <Typography variant="h6" component="h5">
                {weather_state_name}
              </Typography>
              <Grid
                container
                className={classes.weatherInfo}
                direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <WiThermometer className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <strong>Max temperature:</strong>{" "}
                    <em>{Math.floor(max_temp)}</em>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <WiThermometerExterior className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <strong>Min temperature:</strong>{" "}
                    <em>{Math.floor(min_temp)}</em>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <WiHumidity className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <strong>Humidity:</strong> <em>{humidity}</em>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
