import React, { Component } from "react";
import { Grid, Button, ExpansionPanel, MenuItem, InputLabel, ExpansionPanelSummary, ExpansionPanelDetails, Select, Slider } from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import APICompBlush from './APICompBlush';
import APIComponent from "./APIComp";
import chroma from "chroma-js";

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

const SelectProd = () => {
    const classes = useStyles();

    const [brand, setBrand] = React.useState({});

    const handleChange1 = (event, product, name) => {
        setBrand({ [product]: { ...brand[product], [name]: event.target.value } });
    }

    const brands = ["almay", "alva", "anna sui", "annabelle", "benefit", "boosh", "burt's bees", "butter london",
        "c'est moi", "cargo cosmetics", "china glaze", "clinique", "coastal classic creation", "colourpop",
        "covergirl", "dalish", "deciem", "dior", "dr. hauschka", "e.l.f.", "essie", "fenty", "glossier",
        "green people", "iman", "l'oreal", "lotus cosmetics usa", "maia's mineral galaxy", "marcelle", "marienatie",
        "maybelline", "milani", "mineral fusion", "misa", "mistura", "moov", "nudus", "nyx", "orly", "pacifica",
        "penny lane organics", "physicians formula", "piggy paint", "pure anada", "rejuva minerals", "revlon",
        "sally b's skin yummies", "salon perfect", "sante", "sinful colours", "smashbox", "stila", "suncoat",
        "w3llpeople", "wet n wild", "zorah", "zorah biocosmetiques"];

    const colors = ["red", "blue", "pink", "yellow", "green", "orange", "black", "brown", "white", "gray", "purple"];

    const prodname = ["blush", "bronzer", "eyeshadow", "lipstick"];

    // const colorhexvalues = [
    //     {"red": ["#ff0000", "#f80004", "#f20008", "#eb000b", "#e4000e", "#dd0010", "#d70012", "#d00013", "#c90014", "#c30015", #bc0016, #b50017, #ae0017, #a80017, #a10018, #9a0018, #940218, #8d0318, #870417, #800517]},
    //     {"orange": ["#c35817,#c5581a,#c8581d,#ca5920,#cd5922,#cf5925,#d25927,#d4592a,#d75a2d,#d95a2f,#dc5a32,#de5a34,#e05b37,#e35b39,#e55b3c"]}, 
    //     {"yellow"; ["#edda74,#ead56d,#e7cf67,#e5ca61,#e2c45a,#dfbf54,#dcb94d,#d9b447,#d7af41,#d4a93a,#d1a434,#ce9e2d,#cc9926,#c9931f,#c68e17"]}
    // ];

    // chroma.scale(['#ff0000','#800517'])
    //     .mode('lch').colors(8)

    const menui = [];
    const coloritems = [];
    const proditems = [];

    for (const [index, value] of brands.entries()) {
        menui.push(<MenuItem key={index} value={value}>{value}</MenuItem>);
    }

    for (const [index, value] of colors.entries()) {
        coloritems.push(<MenuItem key={index} value={value}>{value}</MenuItem>);
    }

    for (const [index, value] of prodname.entries()) {
        proditems.push(
            <FormControlLabel control={<Checkbox /*checked={state.checkedA} onChange={handleChange2}*/ key={index} name={value} />} label={value}>
            </FormControlLabel>
        );
    }

    const pushedhere = [];

    function pushhh() {
        pushedhere.push(<APICompBlush></APICompBlush>);
    }

    console.log(brand)

    return (
        <div>
            <h1>Select Makeup Products!</h1>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    {prodname.map(product => {
                        return (
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>{product}</Typography>
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
                                            
                                            value={brand[product] ? brand[product]["brand"] : ""}
                                            onChange={(e) => {
                                                handleChange1(e, product, "brand")
                                            }}
                                        >
                                            {menui}
                                            {/* <MenuItem value={"MAC"}>MAC</MenuItem>
                                        <MenuItem value={"Maybeline"}>Maybeline</MenuItem>
                                        <MenuItem value={"Urban Decay"}>Urban Decay</MenuItem> */}
                                        </Select>
                                    </FormControl>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Select a color:
                                </Typography>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">Color</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={brand[product] ? brand[product]["color"] : ""}
                                            onChange={(e) => {
                                                handleChange1(e, product, "color")
                                            }}
                                        >
                                            {coloritems}
                                        </Select>
                                    </FormControl>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        )
                    })}
                </Grid>
                {/*pushedhere*/}
                {/* reds {chroma.scale(['#ff0000','#800517'])
                    .mode('lch').colors(20)} */}
                {/* oranges {chroma.scale(['#c35817','#e55b3c'])
                    .mode('lch').colors(15)} */}
                {chroma.scale(['#edda74','#c68e17'])
                    .mode('lch').colors(15)}
                {/* <APICompBlush></APICompBlush> */}
            </Grid>


        </div>
    );

}

export default SelectProd;