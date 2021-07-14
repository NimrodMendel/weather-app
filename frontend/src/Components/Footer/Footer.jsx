import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
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
      >
        <Grid item>
          <BottomNavigation className={classes.container}>
            <Typography variant="body1" component="p">
              2021 Nimrod Mendel
            </Typography>
          </BottomNavigation>
        </Grid>
      </Grid>
    </>
  );
};
