import React from "react";
import {
  Grid,
  makeStyles,
  BottomNavigation,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    position: "sticky",
    bottom: 0,
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        data-testid="footer"
      >
        <Grid item>
          <BottomNavigation className={classes.container}>
            <p>2021 Nimrod Mendel</p>
          </BottomNavigation>
        </Grid>
      </Grid>
    </>
  );
};
