import React from "react";
import LooksCard from "../LooksCard";
import { Grid, Typography } from "@material-ui/core";
import randomUserList from "./staticTrends";
import AboutPaper from "../AboutPrity";
import RandomAvatar from "./staticImages/RandomAvatar";

const Body = () => {
  const getUserCard = (userCardObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <LooksCard />
      </Grid>
    );
  };

  return (
    <Grid container>
      <Grid item={12}>
        <AboutPaper />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Latest Looks</Typography>
      </Grid>
      {randomUserList.map((userCardObj) => getUserCard(userCardObj))}
    </Grid>
  );
};

export default Body;
