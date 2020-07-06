import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/api";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function LogIN() {
    
    const classes = useStyles();

  return (
    <Grid container 
    direction="column"
    justify="center"
    alignItems="center">
        <Grid item>
            <h2>Log In</h2>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField required id="user-email" label="Email" variant="outlined" />
            <TextField required id="user-password" label="Password" variant="outlined" />
            <Button
                variant="contained"
                color="secondary"
                className={classes.buttonStyles}
                onClick={() => {
                    API.loginUser({
                        email: (document.getElementById('user-email').value),
                        password: (document.getElementById('user-password').value)
                    });

                    // redirect to create look
                    window.location.href = "/looktabs";
                }}>
                    Log In
                </Button>
            </form>
            <h5>Don't have an account? <a href="/RegisterU">Register here</a></h5>

        </Grid>
    </Grid>
  );
}

export default LogIN;