import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function AboutPaper() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h4">Enhance Your Beauty with PRITY...</Typography>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper elevation={3}>Words</Paper>
          <Paper elevation={3}>Go</Paper>
          <Paper elevation={3}>Here</Paper>
        </div>
      </Grid>
    </Grid>
  );
}
