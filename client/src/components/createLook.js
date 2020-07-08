import React, { Component } from "react";
import axios from "axios";
import { Grid, Button, Chip } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class createLookApi extends Component {
  state = {
    products: [],
    isLoading: true,
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  getProducts() {
    console.log("getproducts called");
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=eyeshadow"
      )
      .then((response) => {
        return response.data.map((product) => ({
          name: `${product.name}`,
          colors: `${product.product_colors.map(
            (colour) => colour.colour_name
          )}`,
          hexValue: `${product.product_colors.map((hex) => hex.hex_value)}`,
        }));
      })
      // Let's make sure to change the loading state to display the data
      .then((products) => {
        this.setState(
          {
            products,
            isLoading: false,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch((error) =>
        this.setState({ error, isLoading: false }, () => {
          console.log(this.state);
        })
      );
  }

  render() {
    const { products, isLoading } = this.state;

    const { user } = this.props.auth;

    return (
      <Grid container>
        <h1>Product Results</h1>
        <Button
          variant="contained"
          color="default"
          onClick={() => this.getProducts()}
        >
          CALL API
        </Button>
        <div>
          {!isLoading ? (
            products.map((product) => {
              const { name, colors, hexValue } = product;
              const hexChip = hexValue.split(",").map((singleColor) => {
                const singleSwatch = {
                  backgroundColor: singleColor,
                };
                return <Chip style={singleSwatch}>testing</Chip>;
              });

              return (
                <Grid container>
                  <Grid item>
                    <p>
                      <strong>Product Name: </strong>
                      {name}
                    </p>
                    <p>
                      <strong>Product Color: </strong>
                      {colors}
                    </p>
                    <p>
                      <strong>Palette: </strong>
                      {hexChip}
                    </p>
                    <hr />
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <p>Click to See Selection</p>
          )}
        </div>
      </Grid>
    );
  }
}

createLookApi.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(createLookApi);

// export default createLookApi;
