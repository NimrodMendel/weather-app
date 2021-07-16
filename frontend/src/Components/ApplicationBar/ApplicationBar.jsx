import React from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(0.5),
    background: "#548CA8",
  },
}));

export const ApplicationBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      className={classes.root}
      data-testid="application-bar"
    >
      <Toolbar variant="regular">
        <Typography variant="h5">React Weather App</Typography>
      </Toolbar>
    </AppBar>
  );
};
