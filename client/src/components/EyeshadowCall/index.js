import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";
import { Grid, Button, Chip } from "@material-ui/core";

class ProductTab extends Component {
  state = {
    products: [],
    isLoading: true,
  };

  getProducts() {
    console.log("getproducts called");
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=almay&product_type=eyeshadow"
      )
      .then((response) => {
        return response.data.map((product) => ({
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
        {/* <Button
          variant="contained"
          color="default"
          onClick={() => this.getProducts()}
        >
          CALL API
        </Button> */}
        <div>
          {!isLoading ? (
            products.map((product) => {
              const { colors, hexValue } = product;
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

export default function EyeshadowCall() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Brand</FormLabel>
      <RadioGroup
        aria-label="brand"
        name="eyeshadow brands"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          onClick={() => getProducts()}
          value="Almay"
          control={<Radio />}
          label="Almay"
        />
        <FormControlLabel value="Boosh" control={<Radio />} label="Boosh" />
        <FormControlLabel value="Nyx" control={<Radio />} label="Nyx" />
      </RadioGroup>
    </FormControl>
  );
}
