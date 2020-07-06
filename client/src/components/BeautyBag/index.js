import React, { Component, useContext, useState, Fragment } from "react";
// import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Typography } from "@material-ui/core";
import ChipContext from "../Context/ChipContext";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button, Chip,  } from '@material-ui/core/';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));



const BeautyBag = () => {
    const classes = useStyles();
    

    const { chipObj, setChipObj } = useContext(ChipContext);
    // const [value, setValue] = React.useState(initial);

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    // function handleDelete(index) {
    //     console.info('You clicked the delete icon.');
    //     this.setState({
    //         product: this.state.product.filter((_, i) => i !== index)
    //     });
    // }
    
    const handleDelete = (chipToDelete) => () => {
        console.log(chipToDelete);
        // setChipObj((chips) => chips.filter((chip) => chip.key === chipToDelete));

        // this.setState(prevState => ({
        //     chips: prevState.chips.filter(chip => chip.key !== 'chipToDelete')
        // }))

        const products = chipObj.filter(product => product.key !== chipToDelete )
        setChipObj({products})
    };

    const chipBackground = {
        backgroundColor: "#f7c4c4",
        padding: 10,
        borderRadius: 10,
        margin: 10,
        borderColor: "#C47CA8",
        borderStyle: "outset",
      };

    

    return (

        // function removeProduct (id) {
        //     let index = this.chipObj.findIndex(product => product.get('id') === id);

        //     this.chipObj = index > -1 ?
        //         this.chipObj.remove(index) :
        //         this.chipObj;
        // },

    <Paper component="ul" className={classes.root}>
            <h1>my selected products:</h1>


            {chipObj.map((product) => {
            
            return(

                <li key={product.hexColor} style={chipBackground}>
                    <Chip
                        variant="outlined"
                        value={product.hexColor}
                        icon={<FaceIcon />}
                        label={product.name}
                        onDelete={handleDelete(product)}
                    /> 
              </li>


                // <li key={product.key}>
                //     <Chip
                //         icon={icon}
                //         label={product.productType}
                //         onDelete={product.productType === 'eyeshadow' ? undefined: handleDelete(product) }
                //         className={classes.chip}
                //     />
                // </li>
            );

            })}
            
        </Paper>

    )
};

export default BeautyBag