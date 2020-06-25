import React from "react";
// import { Link } from "react-router-dom";
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
          <h1>PRITY</h1>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
        >
          Search Products
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonStyles}
          onClick={(event) => (window.location.href = "/createlook")}
        >
          Create Look!
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
