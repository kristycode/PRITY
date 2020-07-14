import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import EyeshadowCall from "../Calls/EyeshadowCall";
import EyelinerCall from "../Calls/EyeLinerCall";
import BronzerCall from "../Calls/BronzerCall";
import BlushCall from "../Calls/BlushCall";
import LipstickCall from "../Calls/LipstickCall";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// import FaceIcon from "@material-ui/icons/Face";
import "./style.css";

const LookTabs = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);
  // snackbar open= false means closed, true means open

  const snackBarStyle = {
    color: "green",
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
      <div>
        <Snackbar
          style={snackBarStyle}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          message="Item Added to Vanity!"
          action={
            <React.Fragment>
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
      </div>
      <Tabs position="static" value={selectedTab} onChange={handleChange}>
        <Tab label="Eyeshadow" />
        <Tab label="Eyeliner" />
        <Tab label="Bronzer" />
        <Tab label="Blush" />
        <Tab label="Lipstick" />
      </Tabs>
      {selectedTab === 0 && (
        <EyeshadowCall setOpenToTrue={() => setOpen(true)} />
      )}
      {selectedTab === 1 && (
        <EyelinerCall setOpenToTrue={() => setOpen(true)} />
      )}
      {selectedTab === 2 && <BronzerCall setOpenToTrue={() => setOpen(true)} />}
      {selectedTab === 3 && <BlushCall setOpenToTrue={() => setOpen(true)} />}
      {selectedTab === 4 && (
        <LipstickCall setOpenToTrue={() => setOpen(true)} />
      )}
    </>
  );
};

export default LookTabs;
