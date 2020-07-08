import React from "react";
import LooksCard from "../LooksCard";
import { Grid, Typography } from "@material-ui/core";
import randomUserList from "./staticTrends";
import OutlinedCard from "../AboutPrity";
// import AboutPrity from "../AboutPrity/";
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
      <Grid item xs={12}>
        <Typography variant="h4">
          <strong>Latest Looks</strong>
        </Typography>
      </Grid>
      {randomUserList.map((userCardObj) => getUserCard(userCardObj))}
      <Grid container direction="column">
        <Grid item>
          <OutlinedCard />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Body;
