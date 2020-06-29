import React, { Component } from "react";
import axios from "axios";
import { Grid, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

class createLookApi extends Component {
  state = {
    products: [],
    isLoading: true,
  };

  getProducts() {
    console.log("getproducts called");
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick"
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
              const hexPaper = hexValue.split(",").map((singleColor) => {
                const singleSwatch = {
                  backgroundColor: singleColor,
                };
                return (
                  <Paper elevation={3} style={singleSwatch}>
                    testing
                  </Paper>
                );
              });

              return (
                <Grid container>
                  <Grid item>
                    <p>
                      <strong>Product Name: </strong>
                      {name}
                    </p>
                  </Grid>
                  <Grid item>
                    <p>
                      <strong>Product Color: </strong>
                      {colors}
                    </p>
                  </Grid>
                  <Grid item>
                    {hexPaper}
                    {/* <hr /> */}
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

export default createLookApi;

// const btnStyles = {
//   padding: 10,
//   margin: 5,
// };

// class CreateLook extends Component {
//   render() {
//     return (
//       <Grid container direction="column">
//         <Grid item xs={12}>
//           <h1>Customize Your Avatar</h1>
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="primary"
//             style={btnStyles}
//             onClick={() => createLookAPI.createLookAPI}
//           >
//             Search Products
//           </Button>
//         </Grid>
//         {/* <Grid item>
//           <img src="https://via.placeholder.com/450" alt="placeholder"></img>
//         </Grid> */}
//       </Grid>
//     );
//   }
// }

// export default CreateLook;
