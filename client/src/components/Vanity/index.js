import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { ChipContext } from "../../components/Context/ChipContext";
import BeautyBag from "../BeautyBag";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import AvatarTestingPage from "../../components/AvatarTesting/AvatarTestingPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

export default function Vanity() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <span className={classes.paper}>
            <BeautyBag />
          </span>
        </Grid>
        <Grid item xs={6}>
          <span className={classes.paper}>
            <AvatarTestingPage />
          </span>
        </Grid>
      </Grid>
    </div>
  );
}
