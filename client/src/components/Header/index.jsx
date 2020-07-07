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
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const linkStyles = {
  root: {
    color: "orange",
  },
};

const useStyles = makeStyles(() => ({
  //typography styles is applied to PRITY "logo"
  root: {
    fontFamily: ["Oswald", "sans-serif"],
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={4}>
            <Link to="/">
              <Typography variant="h3" className={linkStyles.root}>
                PRITY
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">
              <Link to="/searchProd" color="secondary" className={classes.root}>
                Search Products
              </Link>
              {/* <Link to="/selectProd" color="secondary">
              Select Products
            </Link> */}
              <Link to="/looktabs" color="secondary" className={classes.root}>
                Create Look
              </Link>
              <Link
                to="/avatarTestingPage"
                color="secondary"
                className={classes.root}
              >
                Avatar Testing
              </Link>
              <Link to="/vanity" color="secondary" className={classes.root}>
                My Vanity
                <IconButton>
                  <LocalMallIcon className={classes.bagIconStyle} />
                </IconButton>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
