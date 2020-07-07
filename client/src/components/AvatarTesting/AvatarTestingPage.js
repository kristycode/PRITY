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
import CustomizeAvatarMenu from "../Avatar/CustomizeAvatarMenu";
import chroma from "chroma-js";

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

// this function takes a hexvalue and allows you to render another hex
// that is a controlled amt lighter or darker than the argument hexvalue

function LightenDarkenColor(col, amt) {
  
  var usePound = false;

  if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

};

// this is a chroma function that should create a scale //


function AvatarTestingPage() {

  
  const classes = useStyles();

  const { chipObj, setChipObj } = useContext(ChipContext);

  console.log(chipObj);

  const DarkenFaceOutline = () => {
    const darkFaceOutline = `${chipObj.skinColor}`;
    if (darkFaceOutline !== "null") 
    {
      return (
        chroma(darkFaceOutline).darken(2.5).saturate(2)
      );
    };
  };

  const LightenEyeReflection = () => {
    const lightEyeReflection = `${chipObj.eyeColor}`;
    if (lightEyeReflection !== "null") 
    {
      return (
        chroma(lightEyeReflection).brighten(2).saturate(1)
      );
    };
  };

  const DarkenFaceShapeOutline = () => {
    const darkFaceShapeOutline = `${chipObj.skinColor}`;
    if (darkFaceShapeOutline !== "null") 
    {
      return (
        chroma(darkFaceShapeOutline).darken(3.5).saturate(2)
      );
    };
  };

  const DarkenLashes = () => {
    const darkLashes = `${chipObj.hairColor}`;
    if (darkLashes !== "null") 
    {
      return (
        chroma(darkLashes).darken(3).saturate(.5)
      );
    };
  };

  const LightenMakeupArea = LightenDarkenColor(`${chipObj.skinColor}`, 10);
  const DarkenMakeupOutline = LightenDarkenColor(`${chipObj.skinColor}`, -20);


  console.log(LightenMakeupArea);
  console.log(DarkenMakeupOutline);


  const StyledBase = styled(Base)`
    width: 310.45px;
    height: 395.77px;
  `;

  const TestingAvatar = styled(StyledBase)`
    .avatar_makeup_base_svg__cls-4 {
      fill: ${LightenMakeupArea};
      stroke: ${DarkenMakeupOutline};
    }
    #avatar_makeup_base_svg__eyeshadow {
      fill: ${chipObj.eyeshadow};
    }
    .avatar_makeup_base_svg__cls-4_2 {
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
    #avatar_makeup_base_svg__right_brow {
      fill: ${chipObj.hairColor};
    }
    .avatar_makeup_base_svg__cls-6 {
      fill: ${DarkenLashes};
    }
    .avatar_makeup_base_svg__cls-7 {
      fill: ${DarkenLashes};
    }
    .avatar_makeup_base_svg__cls-1 {
      fill: ${chipObj.skinColor};
    }
    .avatar_makeup_base_svg__cls-8 {
      fill: ${DarkenFaceOutline};
    }
    .avatar_makeup_base_svg__cls-9 {
      fill: ${DarkenFaceShapeOutline};
    }
    .avatar_makeup_base_svg__cls-5 {
      fill: ${chipObj.eyeColor};
    }
    .avatar_makeup_base_svg__cls-11 {
      fill: ${LightenEyeReflection};
    }

  `;

  return (
    <div>
      <TestingAvatar />
      <CustomizeAvatarMenu />
    </div>
  );
}

export default AvatarTestingPage;
