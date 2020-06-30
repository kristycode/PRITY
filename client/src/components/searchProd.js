import React, { Component } from "react";
import { Grid, ExpansionPanel, MenuItem, InputLabel, ExpansionPanelSummary, ExpansionPanelDetails,Select, Slider } from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import APIComponent from './APIComp';

const PrettoSlider = withStyles({
    root: {
      color: '#F0A6CA',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
})(Slider);

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    paper: {
        height: 60,
        width: 60,
    }
}));

const SearchProd = () => {
    const classes = useStyles();

    const [brand, setBrand] = React.useState('');

    const handleChange1 = (event) => {
        setBrand(event.target.value);
    }

    // const selectionprod = [];

    // const switchRender = (selection)=>{
    //     switch(selection){
    //         case "product":
    //             selectionprod.push(
    //                 <Grid><h3>hello</h3></Grid>
    //             );
    //         default:
    //             selectionprod.push(
    //                 <APIComponent></APIComponent>
    //             );
    //     }
    // }

    const brands = [ "almay", "alva", "anna sui", "annabelle", "benefit", "boosh", "burt's bees", "butter london",
        "c'est moi", "cargo cosmetics", "china glaze", "clinique", "coastal classic creation", "colourpop", 
        "covergirl", "dalish", "deciem", "dior", "dr. hauschka", "e.l.f.", "essie", "fenty", "glossier", 
        "green people", "iman", "l'oreal", "lotus cosmetics usa", "maia's mineral galaxy", "marcelle", "marienatie",
        "maybelline", "milani", "mineral fusion", "misa", "mistura", "moov", "nudus", "nyx", "orly", "pacifica",
        "penny lane organics", "physicians formula", "piggy paint", "pure anada", "rejuva minerals", "revlon",
        "sally b's skin yummies", "salon perfect", "sante", "sinful colours", "smashbox", "stila", "suncoat",
        "w3llpeople", "wet n wild", "zorah", "zorah biocosmetiques" ];

    const colors = ["red", "blue", "pink", "yellow", "green", "orange", "black", "brown", "white", "gray", "purple"];

    const prodname = ["blush","bronzer","eyebrow", "eyeliner","eyeshadow", "foundation","lipliner", "lipstick", "mascara", "nail polish"];

    
    const menui = [];
    const coloritems = [];
    const proditems = [];

    for( const[index, value] of brands.entries()){
        menui.push(<MenuItem key={index} value={value}>{value}</MenuItem>);
    }

    for( const[index, value] of colors.entries()){
        coloritems.push(<MenuItem key={index} value={value}>{value}</MenuItem>);
    }
    
    for (const[index, value] of prodname.entries()){
        proditems.push(
            <FormControlLabel control={<Checkbox /*checked={state.checkedA} onChange={handleChange2}*/ key={index} name={value} />} label={value}>
            </FormControlLabel>
        );
    }

    return (
        <div>
            <h1>Search Makeup Products!</h1>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>By Product</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Select a Product:
                                </Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>
                                <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Products</FormLabel>
                                    <FormGroup>
                                        {proditems}
                                    </FormGroup>
                                </FormControl>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>By Brand</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Select a brand:
                                </Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={brand}
                                        onChange={handleChange1}
                                    >
                                        {menui}
                                        {/* <MenuItem value={"MAC"}>MAC</MenuItem>
                                        <MenuItem value={"Maybeline"}>Maybeline</MenuItem>
                                        <MenuItem value={"Urban Decay"}>Urban Decay</MenuItem> */}
                                    </Select>
                                </FormControl>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>By Color</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Choose a color:
                                </Typography>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Color</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={brand}
                                        onChange={handleChange1}
                                    >
                                        {coloritems}
                                        {/* <MenuItem value={"MAC"}>MAC</MenuItem>
                                        <MenuItem value={"Maybeline"}>Maybeline</MenuItem>
                                        <MenuItem value={"Urban Decay"}>Urban Decay</MenuItem> */}
                                    </Select>
                                </FormControl>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>By Price</Typography>
                                
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Choose a price:
                                </Typography>
                                
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails>
                                <PrettoSlider
                                    defaultValue={20}
                                    aria-labelledby="discrete-slider-always"
                                    valueLabelDisplay="on"
                                    step={10}
                                    min={10}
                                    max={200}
                                />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    

                <APIComponent></APIComponent>
                </Grid>


        </div>
    );
  
}

export default SearchProd;