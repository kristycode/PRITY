import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";
import { Grid, Chip, Typography } from "@material-ui/core";
import API from "../../utils/API";

export default function EyeshadowCall() {
  const [value, setValue] = React.useState("female");
  const [apiState, setApiState] = React.useState({
    products: [],
    isLoading: true,
  });
  const [chipObj, setChipObj] = React.useState([]);
  console.log(chipObj);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const chipBackground = {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  };

  const handleChip = (product, color) => {
    console.log("chip clicked!");
    console.log(product.productType);
    console.log(color);

    setChipObj((value) => {
      return [
        ...value,
        {
          hexColor: color.backgroundColor,
          productType: product.productType,
          name: product.name,
          brand: product.brandName,
          color_name: color.colorName,
        },
      ];
    });

    // API.insertColor({
    //   hexColor: this.value,
    //   productType: chipObj.productType,
    // })
    //   .catch(err => console.log(err));
  };

  const getProducts = (brand) => {
    const makeupURL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=eyeshadow`;
    console.log("getproducts called");
    axios
      .get(makeupURL)
      .then((response) => {
        return response.data.map((product) => ({
          id: `${product.id}`,
          name: `${product.name}`,
          colors: `${product.product_colors.map(
            (colour) => colour.colour_name
          )}`,
          hexValue: `${product.product_colors.map((hex) => hex.hex_value)}`,
          productType: `${product.product_type}`,
          brandName: `${product.brand}`,
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
            onClick={() => getProducts("smashbox")}
            value="Smashbox"
            control={<Radio />}
            label="Smashbox"
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
          const arr = [];
          // 'colors' on line 129 is referring to the actual color names ex: Peachy Pal
          const { hexValue, colors } = product;
          const colorName = colors.split(",").map((e) => arr.push(e));
          // this creates a condition for chips to render ONLY if they have a hex value
          const newChip = hexValue
            .split(",")
            .filter((trueColor) => trueColor !== "");
          // console.log(`newChip: ${newChip}`);
          // hexChip creates separate chips that render the colors from product
          const hexChip = hexValue.split(",").map((singleColor, index) => {
            const findColorName = arr.find((e, i) => i === index);
            if (singleColor !== "") {
              const singleSwatch = {
                backgroundColor: singleColor,
                colorName: findColorName,
              };

              return (
                <Chip
                  // key={product.hexColor}
                  value={singleSwatch}
                  style={singleSwatch}
                  onClick={() => handleChip(product, singleSwatch)}
                />
              );
            }
          });

          return (
            <Grid item xs={3}>
              {newChip.length !== 0 && (
                <div style={chipBackground}>{hexChip}</div>
              )}
              <Typography>{product.name}</Typography>
            </Grid>
          );
        })
      ) : (
        <span></span>
      )}
    </Grid>
  );
}
