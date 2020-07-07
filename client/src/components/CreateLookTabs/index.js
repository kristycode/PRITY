import React from "react";
import { Tabs, Tab, Alert } from "@material-ui/core";
import EyeshadowCall from "../Calls/EyeshadowCall";
import EyelinerCall from "../Calls/EyeLinerCall";
import BronzerCall from "../Calls/BronzerCall";
import BlushCall from "../Calls/BlushCall";
import LipstickCall from "../Calls/LipstickCall";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./style.css";

const LookTabs = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);
  // snackbar open= false means closed, true means open

  const handleSnackbar = () => {
    setOpen(true);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleSnackbar}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
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
