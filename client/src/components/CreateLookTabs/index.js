import React from "react";
import { Tabs, Tab } from "@material-ui/core";
// import CreateLookApi from "../createLook";
import EyeshadowCall from "../Calls/EyeshadowCall";
import EyelinerCall from "../Calls/EyeLinerCall";
import BronzerCall from "../Calls/BronzerCall";
import BlushCall from "../Calls/BlushCall";
import LipstickCall from "../Calls/LipstickCall";
import SnackbarPopup from "../Snackbar";

const LookTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  // snackbar open= false means closed, true means open
  const [open, setOpen] = React.useState(false);

  const handleSnackbar = () => {
    setOpen(true);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <SnackbarPopup />
      <Tabs position="static" value={selectedTab} onChange={handleChange}>
        <Tab label="Eyeshadow" onOpen={setOpen} />
        <Tab label="Eyeliner" />
        <Tab label="Bronzer" />
        <Tab label="Blush" />
        <Tab label="Lipstick" />
      </Tabs>
      {selectedTab === 0 && <EyeshadowCall onOpen={setOpen} />}
      {selectedTab === 1 && <EyelinerCall />}
      {selectedTab === 2 && <BronzerCall />}
      {selectedTab === 3 && <BlushCall />}
      {selectedTab === 4 && <LipstickCall />}
    </>
  );
};

export default LookTabs;
