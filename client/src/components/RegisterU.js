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


function RegisterU() {
    
    const classes = useStyles();

  return (
    <Grid container 
    direction="column"
    justify="center"
    alignItems="center">
        <Grid item>
            <h2>Register</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField required id="username" label="Username" variant="outlined" />
                <TextField required id="email" label="Email" variant="outlined" />
                <TextField required id="password1" label="Password" variant="outlined" />
                <TextField required id="password2" label="Retype Password" variant="outlined" />
                <Button
                variant="contained"
                color="secondary"
                className={classes.buttonStyles}
                onClick={() => {
                    console.log(document.getElementById('username').value)
                    API.registerUser({
                        username: (document.getElementById('username').value),
                        email: (document.getElementById('email').value),
                        password: (document.getElementById('password1').value),
                        password2: (document.getElementById('password2').value)
                    });

                    window.location.href = "/looktabs";
                }}>
                    Submit
                </Button>
            </form>
            
            <h5>Already have an account? <a href="/LogIN">Log in here</a></h5>

        </Grid>
    </Grid>
  );
}

export default RegisterU;