import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import CreateLookApi from "../createLook";
import EyeshadowCall from "../EyeshadowCall";

const LookTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs position="static" value={selectedTab} onChange={handleChange}>
        <Tab label="Eyeshadow" />
        <Tab label="Eyeliner" />
        <Tab label="Bronzer" />
        <Tab label="Blush" />
        <Tab label="Lipstick" />
      </Tabs>
      {selectedTab === 0 && <EyeshadowCall />}
    </>
  );
};

export default LookTabs;
