import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { Grid, Button, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { withStyles } from '@material-ui/core/styles';

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
}, withStyles(styles)(Login));

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/"); // push user to dashboard when they login
        }
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

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData); 
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
                    <h2>Log In</h2>
                    <form noValidate className={styles.root} onSubmit={e => this.onSubmit(e)} autoComplete="off">
                        <Typography>Email:</Typography>
                        <TextField required id="email" type="email" 
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}
                            label="Email" variant="outlined" />
                        <Typography className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
                        </Typography>
                        <Typography>Password:</Typography>
                        <TextField required id="password" type="password" onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                            })}
                            label="Password" variant="outlined" />
                        <Typography className="red-text">
                            {errors.password}
                            {errors.passwordincorrect}
                        </Typography>
                        <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        className={styles.buttonStyles}
                        >
                            Submit
                        </Button>
                    </form>
                    
                    <h5>Don't have an account? <a href="/Register">Register here</a></h5>

                </Grid>
            </Grid>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);