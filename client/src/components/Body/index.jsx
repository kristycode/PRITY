import React from "react";
import LooksCard from "../LooksCard";
import { Grid } from "@material-ui/core";
import randomUserList from "./staticTrends";
import OutlinedCard from "../AboutPrity";
// import AboutPrity from "../AboutPrity/";

const Body = () => {
  const getUserCard = (userCardObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <LooksCard {...userCardObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Latest Looks!</h1>
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
