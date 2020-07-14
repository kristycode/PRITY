import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography, Container } from "@material-ui/core";
// import Makeup03 from "./images/makeup01.png";
import Makeup01 from "./images/makeup02.png";
import Vanity from "./images/vanity.png";
import MakeupC from "./images/makeupC.png";

const makeupImg = {
  height: 150,
};

const beautyA = {
  textAlign: "center",
  margin: 5,
  padding: 10,
  borderRadius: 10,
  borderColor: "red",
  borderStyle: "outset",
};
const beautyB = {
  textAlign: "center",
  margin: 5,
  padding: 10,
  borderRadius: 10,
  borderColor: "green",
  borderStyle: "outset",
};

const beautyC = {
  textAlign: "center",
  margin: 5,
  padding: 10,
  borderRadius: 10,
  borderColor: "blue",
  borderStyle: "outset",
};

export default function AboutPaper() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4">Enhance Your Beauty...</Typography>
      </Grid>
      <Grid item xs={4}>
        <Paper style={beautyA} elevation={3}>
          <Typography variant="h6">Browse Color Palettes</Typography>
          <img src={Makeup01} alt="lipstick" style={makeupImg}></img>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={beautyB} elevation={3}>
          <Typography variant="h6">Visit Your Vanity</Typography>
          <img src={Vanity} alt="lipstick" style={makeupImg}></img>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={beautyC} elevation={3}>
          <Typography variant="h6">Try Them On!</Typography>
          <img src={MakeupC} alt="lipstick" style={makeupImg}></img>
        </Paper>
      </Grid>
    </Grid>
  );
}
