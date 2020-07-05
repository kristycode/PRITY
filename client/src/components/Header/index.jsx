import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import BeautyBag from "../BeautyBag";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
    fontFamily: ["Oswald", "sans-serif"],
  },
  buttonStyles: {
    padding: 10,
    margin: 5,
  },
  bagIconStyle: {
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" className={classes.typographyStyles}>
          <span onClick={() => (window.location.href = "/")}>PRITY</span>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
          onClick={() => (window.location.href = "/searchProd")}
        >
          Search Products
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
          onClick={() => (window.location.href = "/selectProd")}
        >
          Select Products
        </Button>
        {/* temporarily using below button to render vertical tabs */}
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
          onClick={() => (window.location.href = "/looktabs")}
        >
          Create Look!
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
          onClick={() => (window.location.href = "/avatarTestingPage")}
        >
          Avatar Testing Page!
        </Button>
        <span>
          <IconButton onClick={() => (window.location.href = "/beautyBag")}>
            <LocalMallIcon className={classes.bagIconStyle} />
          </IconButton>
          <Typography>items:</Typography>
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
