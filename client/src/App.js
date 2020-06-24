import React from "react";
// import ReactDOM form "react-dom";
import "./App.css";
// import { Layout, Header, Navigation, Content } from 'react-mdl';
// import Main from './components/main';
// import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <Body />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
