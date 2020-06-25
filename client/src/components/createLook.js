import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

const btnStyles = {
  padding: 10,
  margin: 5,
};

class CreateLook extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item xs={12}>
          <h1>Customize Your Avatar</h1>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" style={btnStyles}>
            Face
          </Button>
          <Button variant="contained" color="primary" style={btnStyles}>
            Hair
          </Button>
          <Button variant="contained" color="primary" style={btnStyles}>
            Nose
          </Button>
          <Button variant="contained" color="primary" style={btnStyles}>
            Lips
          </Button>
        </Grid>
        <Grid item>
          <img src="https://via.placeholder.com/450" alt="placeholder"></img>
        </Grid>
      </Grid>
    );
  }
}

export default CreateLook;
