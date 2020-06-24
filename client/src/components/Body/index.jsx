import React, { Component } from "react";
import LooksCard from "../LooksCard";
import { Grid } from "@material-ui/core";
// importing useAPI to generate random user
import eyeMakeup from "../LooksCard/images/eyeMakeup.jpg";
import randomUserList from "./staticTrends";

const Body = () => {
  const getUserCard = (userCardObj) => {
    // const { title, price, description, avatarUrl, imageUrl } = userCardObj;
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
      {/* <Grid item xs={12} sm={4}> */}
      {/* <LooksCard
          title="Killer eye makeup!"
          subtitle="OMG this look is HOT!"
          avatarSrc="https://randomuser.me/api/portraits/thumb/women/44.jpg"
          imgSrc={eyeMakeup}
          description="I got bored the other night and decided to play with some new palettes..."
        /> */}
      {randomUserList.map((userCardObj) => getUserCard(userCardObj))}
      {/* </Grid> */}
    </Grid>
  );
};

export default Body;
