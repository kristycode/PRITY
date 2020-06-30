import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  buttonStyles: {
    padding: 10,
    margin: 5,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          <h1 onClick={() => (window.location.href = "/")}>PRITY</h1>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
          onClick={(event) => (window.location.href = "/searchProd")}
        >
          Search Products
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
          onClick={(event) => (window.location.href = "/selectProd")}
        >
          Select Products
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
          onClick={(event) => (window.location.href = "/createLook")}
        >
          Create Look!
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
          onClick={(event) => (window.location.href = "/avatarTestingPage")}
        >
          Avatar Testing Page!
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
