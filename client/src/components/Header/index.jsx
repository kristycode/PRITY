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
import { Link } from "@material-ui/core";

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
            <Link href="/">
              <Typography variant="h3" className={classes.typographyStyles}>
                PRITY
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              <Link
                href="/searchProd"
                color="secondary"
                className={classes.linkStyle}
              >
                Search Products
              </Link>
              {/* <Link href="/selectProd" color="secondary">
              Select Products
            </Link> */}
              <Link
                href="/looktabs"
                color="secondary"
                className={classes.linkStyle}
              >
                Create Look
              </Link>
              <Link
                href="/avatarTestingPage"
                color="secondary"
                className={classes.linkStyle}
              >
                Avatar Testing
              </Link>
              <IconButton>
                <Link
                  href="/beautyBag"
                  color="secondary"
                  className={classes.linkStyle}
                >
                  <LocalMallIcon className={classes.bagIconStyle} />
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
