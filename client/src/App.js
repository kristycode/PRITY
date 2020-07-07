import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Main from "./components/main";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import ChipContext from "./components/Context/ChipContext";
// import {BeautyProvider} from "./components/BeautyBag/BeautyProvider";

function App() {
  const [chipObj, setChipObj] = useState([]);
  return (
    <ChipContext.Provider value={{ chipObj, setChipObj }}>
      <Container>
        <Router>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item container justify="center">
              <Grid item sm={2} />
              <Grid item xs={12} sm={8}>
                <Main />
              </Grid>
            </Grid>
          </Grid>
        </Router>
      </Container>
    </ChipContext.Provider>
  );
}

export default App;
