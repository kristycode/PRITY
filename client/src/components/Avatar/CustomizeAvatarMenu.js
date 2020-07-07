import React, { useContext } from "react";
//--- removing { css } from line 3 because React says it is not being used
import styled from "styled-components";
import Base from "./SVG/SvgAvatarMakeupBase";
import ChipContext from "../Context/ChipContext";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, IconButton } from "@material-ui/core/";
// import FaceIcon from "@material-ui/icons/Face";
// import DoneIcon from "@material-ui/icons/Done";
// --- adding in list components for chipObj
import { Chip } from "@material-ui/core";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const hairColors = [
        {
        "name" : "midnightBlack",
        "hexcolor" : "#090806"
        },
        {
        "name" : "darkestBrown",
        "hexcolor" : "#3B3024"
        },
        {
        "name" : "medBrown",
        "hexcolor" : "#4E433F"
        },
        {
        "name" : "chestnutBrown",
        "hexcolor" : "#705b35"
        },
        {
        "name" : "lightGoldenBrown",
        "hexcolor" : "#A7856A"
        },
        {
        "name" : "lightestBlonde",
        "hexcolor" : "#E6CEA8"
        },
        {
        "name" : "strawberryBlonde",
        "hexcolor" : "#A56B46"
        },
        {
        "name" : "lightAuburn",
        "hexcolor" : "#91553D"
        },
        {
        "name" : "darkestGray",
        "hexcolor" : "#71635A"
        },
        {
        "name" : "mediumGray",
        "hexcolor" : "#B7A69E"
        },
        {
        "name" : "whiteBlonde",
        "hexcolor" : "#FFF5E1"
        },
        {
        "name" : "russetRed",
        "hexcolor" : "#8D4A43"
        },
    ];

  const skinColors = [
        {
        "name" : "paleIvory",
        "hexcolor" : "#e7bb98"
        },
        {
        "name" : "warmIvory",
        "hexcolor" : "#f3d39a"
        },
        {
        "name" : "almondBeige",
        "hexcolor" : "#e4ba92"
        },
        {
        "name" : "yellowBeige",
        "hexcolor" : "#ce9b6e"
        },
        {
        "name" : "sandBeige",
        "hexcolor" : "#e4bd92"
        },
        {
        "name" : "trueBeige",
        "hexcolor" : "#daae82"
        },
        {
        "name" : "warmBeige",
        "hexcolor" : "#c48b60"
        },
        {
        "name" : "goldenBeige",
        "hexcolor" : "#d9b17d"
        },
        {
        "name" : "honeyBeige",
        "hexcolor" : "#cc9778"
        },
        {
        "name" : "reddishTan",
        "hexcolor" : "#ab6d44"
        },
        {
        "name" : "oliveBrown",
        "hexcolor" : "#8f5434"
        },
        {
        "name" : "cafeBrown",
        "hexcolor" : "#b98e61"
        },
        {
        "name" : "goldenBrown",
        "hexcolor" : "#b6784f"
        },
        {
        "name" : "toastedBrown",
        "hexcolor" : "#7e5040"
        },
        {
        "name" : "chocolateBrown",
        "hexcolor" : "#73452d"
        },
        {
        "name" : "deepBrown",
        "hexcolor" : "#4f2f20"
        },
    ];

    const eyeColors =[
        {
        "name" : "brown",
        "hexcolor" : "#634e34"
        },
        {
        "name" : "blue",
        "hexcolor" : "#2e536f"
        },
        {
        "name" : "blueGreen",
        "hexcolor" : "#2a423c"
        },
        {
        "name" : "hazelGreen",
        "hexcolor" : "#3d671d"
        },
        {
        "name" : "green",
        "hexcolor" : "#1c7847"
        },
        {
        "name" : "greyGreen",
        "hexcolor" : "#497665"
        },
        {
        "name" : "greyBlue",
        "hexcolor" : "#76948c"
        },
        {
        "name" : "lightBlue",
        "hexcolor" : "#79c4c1"
        },
    ];

    const chipBackground = {
      backgroundColor: "#f7c4c4",
      padding: 10,
      borderRadius: 10,
      margin: 10,
      borderColor: "#C47CA8",
      borderStyle: "outset",
    };

    const useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
    }));



const NestedList = () => {
      const classes = useStyles();

      const { chipObj, setChipObj } = useContext(ChipContext);

      console.log(chipObj);

      const [open, setOpen] = React.useState(true);

      const handleClick = () => {
        setOpen(!open);
      };



      const applyHairColor = (name, hexcolor) => {
        setChipObj({...chipObj, hairColor: hexcolor})
      };
    
      const applySkinColor = (name, hexcolor) => {
        setChipObj({...chipObj, skinColor: hexcolor})
      };
    
      const applyEyeColor = (name, hexcolor) => {
        setChipObj({...chipObj, eyeColor: hexcolor})
      };
    
      const HairColorSelections = () => { 
        return(
          hairColors.map((haircolor) => {
            const chipColor = {
              backgroundColor: haircolor.hexcolor,
            };
                return (
                      <Chip 
                      key={haircolor.name}
                      variant="outlined"
                      style={chipColor} 
                      onClick={() => applyHairColor(haircolor.name, haircolor.hexcolor)} 
                      />
                )
    
            })
        );
      };
    
      const SkinColorSelections = () => { 
        return(
          skinColors.map((skincolor) => {
            const chipColor = {
              backgroundColor: skincolor.hexcolor,
            };
                return (
                      <Chip 
                      key={skincolor.name}
                      variant="outlined"
                      style={chipColor} 
                      onClick={() => applySkinColor(skincolor.name, skincolor.hexcolor)} 
                      />
                )
    
            })
        );
      };
    
      const EyeColorSelections = () => { 
        return(
          eyeColors.map((eyecolor) => {
            const chipColor = {
              backgroundColor: eyecolor.hexcolor,
            };
                return (
                      <Chip 
                      key={eyecolor.name}
                      variant="outlined"
                      style={chipColor} 
                      onClick={() => applyEyeColor(eyecolor.name, eyecolor.hexcolor)} 
                      />
                )
    
            })
        );
      };
    




      return (

        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Avatar Customization Menu
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Hair Color" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
            <HairColorSelections/>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Skin Color" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
            <SkinColorSelections/>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Eye Color" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
            <EyeColorSelections/>
            </ListItem>
          </List>
        </Collapse>

      </List>

      );
}






























//         <div className={classes.root}>
//           <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1bh-content"
//               id="panel1bh-header"
//             >
//               <Typography className={classes.heading}>Hair Colors</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <div style={chipBackground}>{HairColorSelections}</div>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel2bh-content"
//               id="panel2bh-header"
//             >
//               <Typography className={classes.heading}>Skin Colors</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//             <div style={chipBackground}>{SkinColorSelections}</div>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel3bh-content"
//               id="panel3bh-header"
//             >
//               <Typography className={classes.heading}>Eye Colors</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//             <div style={chipBackground}>{EyeColorSelections}</div>
//             </AccordionDetails>
//           </Accordion>
//         </div>
//       );
// };






export default function CustomizeAvatar() {
  const classes = useStyles();
  const { chipObj, setChipObj } = useContext(ChipContext);

  console.log(chipObj);


return (
  <div className={classes.root}>
  <NestedList />
  </div>

);}
  // const skinColors = [

  // ];

  // const eyeColors = [

  // ];

  // const applyHairColor = (name, hexcolor) => {
  //   setChipObj({...chipObj, hairColor: hexcolor})
  // };

  // const HairColorSelections = () => { 
  //   return(
  //     hairColors.map((haircolor) => {
  //       const chipColor = {
  //         backgroundColor: haircolor.hexcolor,
  //       };

  //           return (
  //           <List className={classes.root}>
  //             <ListItem key={haircolor.name}>
  //               <ListItemAvatar>
  //                 <Chip 
  //                 variant="outlined"
  //                 style={chipColor} 
  //                 onClick={() => applyHairColor(haircolor.name, haircolor.hexcolor)} />
  //               </ListItemAvatar>
  //               <ListItemText
  //                 primary={haircolor.name}
  //               />
  //             </ListItem>
  //             <Divider variant="inset" component="li" />
  //           </List>
  //           )

  //       })
  //   );
  // };
  
  // const skinColorSelections = {

  // };
  // const eyeColorSelections = {

  // };
