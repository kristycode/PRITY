import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography, Container } from "@material-ui/core";
import Makeup01 from "./images/makeup01.png";
import Vanity from "./images/vanity.png";
import Makeup02 from "./images/makeup02.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const makeupImg = {
  height: 100,
};

const enhanceStyle = {
  // marginTop: 30,
  // padding: 10,
};

const beautyA = {
  textAlign: "center",
  // margin: 5,
  // padding: 10,
  borderRadius: 10,
  borderColor: "red",
  borderStyle: "outset",
};
const beautyB = {
  textAlign: "center",
  // margin: 5,
  // padding: 10,
  borderRadius: 10,
  borderColor: "green",
  borderStyle: "outset",
};

const beautyC = {
  textAlign: "center",
  // margin: 5,
  // padding: 10,
  borderRadius: 10,
  borderColor: "blue",
  borderStyle: "outset",
};

export default function AboutPaper() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={7}>
        <Grid item xs={12} style={enhanceStyle}>
          <Typography variant="h4">Enhance Your Beauty...</Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper style={beautyA} elevation={3} className={classes.paper}>
            <Typography variant="h6">Browse Color Palettes</Typography>
            <img src={Makeup01} alt="lipstick" style={makeupImg}></img>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={beautyB} elevation={3} className={classes.paper}>
            <Typography variant="h6">Visit Your Vanity</Typography>
            <img src={Vanity} alt="lipstick" style={makeupImg}></img>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={beautyC} elevation={3} className={classes.paper}>
            <Typography variant="h6">Try Them On!</Typography>
            <img src={Makeup02} alt="lipstick" style={makeupImg}></img>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
