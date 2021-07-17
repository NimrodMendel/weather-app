import React from "react";
import { makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  spinner: {
    marginTop: theme.spacing(4),
  },
}));

export const Spinner = () => {
  const classes = useStyles();
  return (
    <>
      <CircularProgress
        data-testid="spinner"
        color="primary"
        className={classes.spinner}
      />
    </>
  );
};
