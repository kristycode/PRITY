import React from "react";
// import ReactDOM form "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
// import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from "./components/main";
// import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
// import Body from "./components/Body/index.jsx";
// import CreateLook from "./components/createLook";

function App() {
  return (
    <Router>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Main />
            {/* <Route exact path="/" component={Body} />
            <Route exact path="/createlook" component={CreateLook} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
