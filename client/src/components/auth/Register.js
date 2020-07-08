import React, { Component } from "react";
import { withRouter  } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { Grid, Button, TextField } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
// }));

const styles = theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch"
        }
    }
}, withStyles(styles)(Register));

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history); 
        console.log(this.props.history);
        
        console.log(newUser);
    };
    render() {
        const { errors } = this.state;
        // const classes = useStyles();

        return (
            <Grid container 
            direction="column"
            justify="center"
            alignItems="center">
                <Grid item>
                    <h2>Register</h2>
                    <form noValidate className={styles.root} onSubmit={e => this.onSubmit(e)} autoComplete="off">
                        <Typography>Username:</Typography>
                        <TextField required id="username" type="username"
                            onChange={this.onChange}
                            value={this.state.username}
                            error={errors.username}
                            className={classnames("", {
                                invalid: errors.username
                            })}
                            label="Username" variant="outlined" />
                        <Typography className="red-text">{errors.username}</Typography>
                        <Typography>Email:</Typography>
                        <TextField required id="email" type="email" 
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            className={classnames("", {
                                invalid: errors.email
                            })}
                            label="Email" variant="outlined" />
                        <Typography className="red-text">{errors.email}</Typography>
                        <Typography>Password:</Typography>
                        <TextField required id="password" type="password" onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            className={classnames("", {
                                invalid: errors.password
                            })}
                            label="Password" variant="outlined" />
                        <Typography className="red-text">{errors.password}</Typography>
                        <Typography>Confirm Password:</Typography>
                        <TextField required onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            className={classnames("", {
                                invalid: errors.password2
                            })}
                            id="password2"
                            type="password" label="Retype Password" variant="outlined" />
                        <Typography className="red-text">{errors.password2}</Typography>
                        <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        className={styles.buttonStyles}
                        // onSubmit={this.onSubmit}
                        // onClick = {() => {
                        //     s
                        // }}
                        // onClick={() => {
                        //     console.log(document.getElementById('username').value)
                        //     registerUser({
                        //         username: (document.getElementById('username').value),
                        //         email: (document.getElementById('email').value),
                        //         password: (document.getElementById('password1').value),
                        //         password2: (document.getElementById('password2').value)
                        //     });

                        // }}
                        >
                            Submit
                        </Button>
                    </form>
                    
                    <h5>Already have an account? <a href="/Login">Log in here</a></h5>

                </Grid>
            </Grid>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));