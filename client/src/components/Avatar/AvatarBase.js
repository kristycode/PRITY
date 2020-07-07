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

function AvatarBase() {

  const { chipObj, setChipObj } = useContext(ChipContext);

  console.log(chipObj);

  const StyledBase = styled(Base)`
    width: 310.45px;
    height: 395.77px;
  `;

  const TestingAvatar = styled(StyledBase)`
    #avatar_makeup_base_svg__eyeshadow {
      fill: ${chipObj.eyeshadow};
    }
    #avatar_makeup_base_svg__eyeliner {
      fill: ${chipObj.eyeliner};
    }
    #avatar_makeup_base_svg__blush {
      fill: ${chipObj.blush};
    }
    #avatar_makeup_base_svg__bronzer {
      fill: ${chipObj.bronzer};
    }
    #avatar_makeup_base_svg__lips {
      fill: ${chipObj.lipstick};
    }
    #avatar_makeup_base_svg__hair_color {
      fill: ${chipObj.hairColor};
    }
    #avatar_makeup_base_svg__left_brow {
      fill: ${chipObj.hairColor};
    }
    #avatar_makeup_base_svg__right_brow {
      fill: ${chipObj.hairColor};
    }
    #avatar_makeup_base_svg__skin_color {
      fill: ${chipObj.skinColor};
    }
    #avatar_makeup_base_svg__eye_color {
      fill: ${chipObj.eyeColor};
    }
  `;


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
    {
      "name" : "lightAuburn",
      "hexcolor" : "#91553D"
    },
  ];

  const skinColors = [

  ];

  const eyeColors = [

  ];

  const applyHairColor = (name, hexcolor) => {
    setChipObj({...chipObj, hairColor: hexcolor})
  };

  const HairColorSelections = () => { 
    return(
      hairColors.map((haircolor) => {
        const chipColor = {
          backgroundColor: haircolor.hexcolor,
        };

            return (
            <List className={classes.root}>
              <ListItem key={haircolor.name}>
                <ListItemAvatar>
                  <Chip 
                  variant="outlined"
                  style={chipColor} 
                  onClick={() => applyHairColor(haircolor.name, haircolor.hexcolor)} />
                </ListItemAvatar>
                <ListItemText
                  primary={haircolor.name}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
            )

        })
    );
  };
  
  const skinColorSelections = {

  };
  const eyeColorSelections = {

  };

  return (
    <div>
      <TestingAvatar />
      <HairColorSelections />
    </div>
  );
}

export default AvatarTestingPage;
