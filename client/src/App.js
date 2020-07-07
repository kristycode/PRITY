import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Main from "./components/main";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import ChipContext from "./components/Context/ChipContext";
import SnackbarContext, {
  SnackbarProvider,
} from "./components/Context/SnackbarContext";

function App() {
  const [chipObj, setChipObj] = useState({
    eyeshadow: null,
    eyeliner: null,
    blush: null,
    bronzer: null,
    lipstick: null,
    beautyBag: [],
  });
  return (
    <ChipContext.Provider value={{ chipObj, setChipObj, open, setOpen }}>
      <SnackbarContext.Provider>
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
      </SnackbarContext.Provider>
    </ChipContext.Provider>
  );
}

export default App;
