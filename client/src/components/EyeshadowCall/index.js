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

  const getProducts = (brand) => {
    const makeupURL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=eyeshadow`;
    console.log("getproducts called");
    axios
      .get(makeupURL)
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
        setApiState({
          products,
          isLoading: false,
        });
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch((error) =>
        this.setState({ error, isLoading: false }, () => {
          console.log(this.state);
        })
      );
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
          onClick={() => getProducts("almay")}
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
