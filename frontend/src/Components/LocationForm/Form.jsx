import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import getWeatherForcast from "../../Lib/api";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  btn: {
    background: "#548CA8",
    color: "white",
  },
}));

const validationSchema = yup.object({
  city: yup.string("Enter city name").required("City is required"),
});

export const LocationForm = ({ getForecast }) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      getForecast(values.city);
    },
  });
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        className={classes.root}
      >
        <Grid item>
          <Typography variant="h3">Weather App</Typography>
        </Grid>
        <Grid item>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="city"
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              variant="outlined"
              size="small"
              margin="normal"
              fullWidth
            />
            <Button
              className={classes.btn}
              variant="contained"
              fullWidth
              type="submit"
              size="medium"
            >
              Check weather!
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
