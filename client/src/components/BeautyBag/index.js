import React, { useContext } from "react";
// removed from line above due to inuse: Component,useState, Fragment
// import LocalMallIcon from "@material-ui/icons/LocalMall";
// import { Typography } from "@material-ui/core";
import ChipContext from "../Context/ChipContext";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, IconButton } from "@material-ui/core/";
// import FaceIcon from "@material-ui/icons/Face";
// import DoneIcon from "@material-ui/icons/Done";
// --- adding in list components for chipObj
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import { Chip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

//
// const HandleDelete = () => {
//   if (window.confirm("Are you sure you want to delete this task?")) {
//     console.log("phase 1");
//   }
// };

const BeautyBag = () => {
  const classes = useStyles();

  const { chipObj, setChipObj } = useContext(ChipContext);

  function deleteItem(name, type) {
    // console.log("test");
    let newChipObj = [...chipObj];
    // console.log(newChipObj);
    const idx = newChipObj.findIndex(
      (p) => p.name === name && p.productType === type
    );
    // console.log(idx);
    if (idx > -1) {
      newChipObj.splice(idx, 1);
      setChipObj(newChipObj);
      // console.log(chipObj);
      // console.log(newChipObj);
    }
  }

  console.log("chipObj");
  console.log(chipObj);

  // test code

  //-------------------------------------------------------//
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  // const handleDelete = (chipToDelete) => () => {
  //   console.log("Chip to delete");
  //   console.log(chipToDelete);

  //   const products = chipObj.filter((product) => product.key !== chipToDelete);
  //   setChipObj({ products });
  // };

  const cardBackground = {
    backgroundColor: "#f7c4c4",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    borderColor: "#C47CA8",
    borderStyle: "outset",
  };

  return (
    <Container>
      <Typography variant="h4">My Products:</Typography>

      {chipObj.map((product) => {
        const itemKey = product.hexColor + product.productType;
        console.log("itemKey");
        console.log(itemKey);
        const chipColor = {
          backgroundColor: product.hexColor,
        };

        //place teh icon in a variable to be reused
        // const BeautyOptions= ()

        return (
          <List className={classes.root}>
            <ListItem key={itemKey}>
              <ListItemAvatar>
                <Chip style={chipColor} />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={product.productType}
              />
              <IconButton>
                <DeleteIcon
                  onClick={() => deleteItem(product.name, product.productType)}
                />
              </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        );
      })}
    </Container>
  );
};

export default BeautyBag;
