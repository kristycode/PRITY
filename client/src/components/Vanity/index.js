import React from "react";
import BeautyBag from "../BeautyBag";
import { Grid } from "@material-ui/core";
import AvatarTest2 from "../../components/AvatarTesting/AvatarTest2";
import NestedList from "../Avatar/CustomizeAvatarMenu";

export default function Vanity() {
  return (
    <Grid container>
      <Grid item xs={0} sm={0} md={4}>
        <BeautyBag />
      </Grid>
      <Grid item xs={0} sm={0} md={4}>
        <AvatarTest2 />
      </Grid>
      <Grid xs={0} sm={0} md={4}>
        <NestedList />
      </Grid>
    </Grid>
  );
}
