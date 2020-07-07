import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";
import { Grid, Chip, Typography } from "@material-ui/core";
// import API from "../../../utils/API";
import ChipContext from "../../Context/ChipContext";

// this function is being called in CreateLookTabs > index.js
export default function EyeshadowCall() {
  const { chipObj, setChipObj } = useContext(ChipContext);
  const [value, setValue] = React.useState();
  // below state is responsible for setting state for api call
  const [apiState, setApiState] = React.useState({
    products: [],
    isLoading: true,
  });

  // handles radio button clicks
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // renders background for chips to create 'palettes'
  const chipBackground = {
    backgroundColor: "#f7c4c4",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    borderColor: "#C47CA8",
    borderStyle: "outset",
  };

  const eyeshadowContainerStyle = {
    marginTop: 20,
  };

  // when a chip color is clicked
  const handleChip = (product, color) => {
    console.log("chip clicked!");
    console.log(product.productType);
    console.log(color);

    setChipObj({
      ...chipObj,
      beautyBag: [
        ...chipObj.beautyBag,
        {
          hexColor: color.backgroundColor,
          productType: product.productType,
          name: product.name,
          brand: product.brandName,
          color_name: color.colorName,
        },
      ],
    });
    // API.insertColor({
    //   hexColor: this.value,
    //   productType: chipObj.productType,
    // })
    //   .catch(err => console.log(err));
  };

  const getProducts = (brand) => {
    const makeupURL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=eyeshadow`;
    // console.log("getproducts called");
    axios
      .get(makeupURL)
      .then((response) => {
        return response.data.map((product, index) => ({
          name: `${product.name}`,
          colors: `${product.product_colors.map(
            (colour) => colour.colour_name
          )}`,
          hexValue: `${product.product_colors.map((hex) => hex.hex_value)}`,
          productType: `${product.product_type}`,
          brandName: `${product.brand}`,
          id: `${product.id}`,
        }));
      })
      // Let's make sure to change the loading state to display the data
      .then((products) => {
        console.log(products);
        setApiState({
          products,
          isLoading: false,
        });
        // console.log();
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch((error) =>
        this.setState({ error, isLoading: false }, () => {
          console.log(this.state);
        })
      );
  };
  return (
    <Grid container direction="row" style={eyeshadowContainerStyle}>
      <Grid item xs={12}>
        <Typography variant="h6">Eyeshadow Brands</Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">Select to Display Palettes</FormLabel>
          <RadioGroup
            aria-label="brand"
            name="eyeshadow brands"
            value={value || ""}
            onChange={handleChange}
            row
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
            <FormControlLabel
              onClick={() => getProducts("clinique")}
              value="Clinique"
              control={<Radio />}
              label="Clinique"
            />
            <FormControlLabel
              onClick={() => getProducts("lotus%20cosmetics%20usa")}
              value="Lotus Cosmetics"
              control={<Radio />}
              label="Lotus Cosmetics"
            />
            {/* <FormControlLabel
              onClick={() => getProducts("dior")}
              value="Dior"
              control={<Radio />}
              label="Dior"
            /> */}
          </RadioGroup>
        </FormControl>
      </Grid>
      {!apiState.isLoading ? (
        apiState.products.map((product) => {
          const arr = [];
          // 'colors' is referring to the actual color names ex: Peachy Pal
          const { hexValue, colors } = product;
          // const colorName = colors.split(",").map((e) => arr.push(e));
          // this creates a condition for chips to render ONLY if they have a hex value
          const newChip = hexValue
            .split(",")
            .filter((trueColor) => trueColor !== "");
          // this const will create a condition to only return products names if hexcolor is true
          // const trueColorName = colors
          //   .split(",")
          //   .filter((colorName) => colorName !== "");

          // hexChip creates separate chips that render the colors from product
          const hexChip = hexValue.split(",").map((singleColor, index) => {
            const findColorName = arr.find((e, i) => i === index);
            if (singleColor !== "") {
              const singleSwatch = {
                backgroundColor: singleColor,
                colorName: findColorName,
                alignItems: "flex-start",
              };

              // returns individual chips
              return (
                <Chip
                  key={
                    product.id + "/" + product.productType + "/" + singleColor
                  }
                  variant="outlined"
                  value={singleSwatch}
                  style={singleSwatch}
                  message="item added to bag!"
                  onClick={() => {
                    handleChip(product, singleSwatch);
                  }}
                />
              );
            }
          });

          return (
            <Grid item xs={3} className="chipGridItem">
              {newChip.length !== 0 && (
                <div style={chipBackground}>{hexChip}</div>
              )}
              {newChip.length !== 0 && (
                <Typography variant="subtitle1">{product.name}</Typography>
              )}
            </Grid>
          );
        })
      ) : (
        <span></span>
      )}
    </Grid>
  );
}
