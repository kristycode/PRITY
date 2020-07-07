import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
// import BeautyBag from "../BeautyBag";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    fontFamily: ["Oswald", "sans-serif"],
    color: "white",
    flex: 1,
    padding: 10,
  },
  bagIconStyle: {
    color: "white",
  },
  linkStyle: {
    margin: 10,
    fontFamily: ["Oswald", "sans-serif"],
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid justify="space-between" container spacing={30}>
          <Grid item>
            <Link to="/">
              <Typography variant="h3" className={classes.typographyStyles}>
                PRITY
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              {/* <Link
                to="/searchProd"
                color="secondary"
                className={classes.linkStyle}
              >
                Search Products
              </Link> */}
              {/* <Link to="/selectProd" color="secondary">
              Select Products
            </Link> */}
              <Link
                to="/looktabs"
                color="secondary"
                className={classes.linkStyle}
              >
                Create Look
              </Link>
              <Link
                to="/avatarTestingPage"
                color="secondary"
                className={classes.linkStyle}
              >
                Avatar Testing
              </Link>
              <IconButton>
                <Link
                  to="/vanity"
                  color="secondary"
                  className={classes.linkStyle}
                >
                  <LocalMallIcon className={classes.bagIconStyle} />
                  My Vanity
                </Link>
              </IconButton>
              <IconButton>
                <Link
                  to="/LogIn"
                  color="secondary"
                  className={classes.linkStyle}
                >
                  Log In
                </Link>
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
