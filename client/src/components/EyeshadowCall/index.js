import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";
import { Grid, Button, Chip } from "@material-ui/core";

export default function EyeshadowCall() {
  const [value, setValue] = React.useState("female");
  const [apiState, setApiState] = React.useState({
    products: [],
    isLoading: true,
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const chipBackground = {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  };

  const getProducts = (brand) => {
    const makeupURL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=eyeshadow`;
    console.log("getproducts called");
    axios
      .get(makeupURL)
      .then((response) => {
        return response.data.map((product) => ({
          hexValue: `${product.product_colors.map((hex) => hex.hex_value)}`,
        }));
      })
      // Let's make sure to change the loading state to display the data
      .then((products) => {
        console.log(products);
        setApiState({
          products,
          isLoading: false,
        });
        console.log();
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch((error) =>
        this.setState({ error, isLoading: false }, () => {
          console.log(this.state);
        })
      );
  };

  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Brand</FormLabel>
        <RadioGroup
          aria-label="brand"
          name="eyeshadow brands"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            onClick={() => getProducts("rejuva%20minerals")}
            value="Rejuva Minerals"
            control={<Radio />}
            label="Rejuva Minerals"
          />
          <FormControlLabel
            onClick={() => getProducts("covergirl")}
            value="Covergirl"
            control={<Radio />}
            label="Covergirl"
          />
          <FormControlLabel
            onClick={() => getProducts("nyx")}
            value="Nyx"
            control={<Radio />}
            label="Nyx"
          />
          <FormControlLabel
            onClick={() => getProducts("marienatie")}
            value="Marienatie"
            control={<Radio />}
            label="Marienatie"
          />
        </RadioGroup>
      </FormControl>
      {!apiState.isLoading ? (
        apiState.products.map((product) => {
          const { hexValue } = product;
          const hexChip = hexValue.split(",").map((singleColor) => {
            const singleSwatch = {
              backgroundColor: singleColor,
            };
            return <Chip style={singleSwatch} />;
          });

          return (
            <Grid item xs={3}>
              <p style={chipBackground} key={product.hexValue}>
                {hexChip}
              </p>
            </Grid>
          );
        })
      ) : (
        <p></p>
      )}
    </Grid>
  );
}
