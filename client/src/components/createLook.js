import React, { Component } from "react";
import axios from "axios";
import { Grid, Button } from "@material-ui/core";

class createLookApi extends Component {
  state = {
    products: [],
    isLoading: true,
  };

  // componentDidMount() {
  //   this.getProducts();
  // }

  getProducts() {
    console.log("getproducts called");
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json?")
      .then((response) => {
        return response.data.map((product) => ({
          price: `${product.price}`,
          colors: `${product.product_colors.map(
            (colour) => colour.colour_name
          )}`,
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

  render(props) {
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
              const { price, colors } = product;
              return (
                <div>
                  <p>Product price: {price}</p>
                  <p>Product Color: {colors}</p>
                  <hr />
                </div>
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