import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid
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
              <Link
                to="/searchProd"
                color="secondary"
                className={classes.linkStyle}
              >
                Search Products
              </Link>
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
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
