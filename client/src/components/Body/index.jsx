import React from "react";
import LooksCard from "../LooksCard";
import { Grid } from "@material-ui/core";
// importing useAPI to generate random user
// import eyeMakeup from "../LooksCard/images/eyeMakeup.jpg";
import randomUserList from "./staticTrends";

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
        <h1>Trending Looks</h1>
      </Grid>
      {randomUserList.map((userCardObj) => getUserCard(userCardObj))}
    </Grid>
  );
};

export default Body;
