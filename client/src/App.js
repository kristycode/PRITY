import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Main from "./components/main";
// import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import ChipContext from "./components/Context/ChipContext";

// import {BeautyProvider} from "./components/BeautyBag/BeautyProvider";

function App() {
  const [chipObj, setChipObj] = useState({
    eyeshadow: null,
    eyeliner: null,
    blush: null,
    bronzer: null,
    lipstick: null,
    beautyBag: [],
    hairColor: null,
    skinColor: null,
    eyeColor: null,
  });
  return (
    <ChipContext.Provider value={{ chipObj, setChipObj }}>
      <Container>
        <Router>
          <header>
            <Header />
          </header>
          <Main />
        </Router>
      </Container>
    </ChipContext.Provider>
  );
}

export default App;
