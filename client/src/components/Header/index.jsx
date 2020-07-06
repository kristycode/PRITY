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
// import BeautyBag from "../BeautyBag";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <Typography variant="h3" className={classes.typographyStyles}>
            PRITY
          </Typography>
        </Link>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
        >
          <Link to="/searchProd">Search Products</Link>{" "}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
        >
          <Link to="/selectProd">Select Products</Link>{" "}
        </Button>
        {/* temporarily using below button to render vertical tabs */}
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
        >
          <Link to="/looktabs">Create Look</Link>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
        >
          <Link to="/avatarTestingPage">Avatar Testing</Link>
        </Button>
        <span>
          <IconButton>
            <Link to="/vanity">
            <LocalMallIcon className={classes.bagIconStyle} />
          
          <Typography>Vanity</Typography>
          </Link></IconButton>
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
