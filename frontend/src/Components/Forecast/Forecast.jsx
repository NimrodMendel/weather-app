import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
  hotWeather: {
    color: "#CD113B",
  },
  coldWeather: {
    color: "#39A2DB",
  },
}));

export const Forecast = ({ forecast }) => {
  const classes = useStyles();
  console.log(forecast);
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
              <Typography variant="h5" component="h2">
                {forecast[0].applicable_date}
              </Typography>
              <Typography
                variant="h3"
                component="p"
                className={
                  forecast[0].the_temp >= 23
                    ? classes.hotWeather
                    : classes.coldWeather
                }
              >
                {Math.floor(forecast[0].the_temp)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
