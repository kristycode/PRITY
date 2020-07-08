import React from "react";
import Logout from "../auth/Logout";
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
    flex: 1,
    padding: 10,
    textDecoration: "none",
  },
  bagIconStyle: {
    color: "white",
  },
  linkStyle: {
    margin: 10,
    color: "white",
    textDecoration: "none",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid justify="space-between" container spacing={30}>
          <Grid item>
            <Link to="/" className={classes.linkStyle}>
              <Typography variant="h2">PRITY</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              <Link
                to="/looktabs"
                color="secondary"
                className={classes.linkStyle}
              >
                Create Look
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
              {/* <IconButton>
                <Link
                  to="/vanitytest"
                  color="secondary"
                  className={classes.linkStyle}
                >
                  <LocalMallIcon className={classes.bagIconStyle} />
                  Vanity Test
                </Link>
              </IconButton> */}
              <IconButton>
                <Link
                  to="/Login"
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
