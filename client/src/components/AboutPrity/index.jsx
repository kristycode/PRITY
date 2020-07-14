import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(10),
      // height: theme.spacing(16),
    },
    textAlign: "center",
    margin: 5,
    padding: 0,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    borderColor: "#C47CA8",
    borderStyle: "outset",
  },
}));

const beautyA = {
  textAlign: "center",
  margin: 5,
  padding: 0,
  padding: 10,
  borderRadius: 10,
  margin: 10,
  borderColor: "#C47CA8",
  borderStyle: "outset",
};
const beautyB = {
  textAlign: "center",
  margin: 5,
  padding: 0,
  padding: 10,
  borderRadius: 10,
  margin: 10,
  borderColor: "green",
  borderStyle: "outset",
};

const beautyC = {
  textAlign: "center",
  margin: 5,
  padding: 0,
  padding: 10,
  borderRadius: 10,
  margin: 10,
  borderColor: "blue",
  borderStyle: "outset",
};

export default function AboutPaper() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">Enhance Your Beauty...</Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper style={beautyA} elevation={3}>
            Browse Color Palettes
          </Paper>
        </Grid>
        <Grid xs={4}>
          <Paper style={beautyA} elevation={3}>
            Visit Your Vanity
          </Paper>
        </Grid>
        <Grid xs={4}>
          <Paper style={beautyA} elevation={3}>
            Try Them On!
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
