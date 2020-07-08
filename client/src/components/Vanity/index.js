import React, { useContext } from "react";
import BeautyBag from "../BeautyBag";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import AvatarTestingPage from "../../components/AvatarTesting/AvatarTestingPage";
import NestedList from "../Avatar/CustomizeAvatarMenu";

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
    <Grid container justify="space-">
      <Grid item xs={4}>
        <BeautyBag />
      </Grid>
      <Grid item xs={4}>
        <AvatarTestingPage />
      </Grid>
      <Grid xs={4}>
        <NestedList />
      </Grid>
    </Grid>
  );
}
