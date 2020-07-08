import React, { useContext } from "react";
import ChipContext from "../Context/ChipContext";
import { Container, IconButton, Paper, Card } from "@material-ui/core/";
import { Chip, Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const hairColors = [
  {
    name: "midnightBlack",
    hexcolor: "#090806",
  },
  {
    name: "darkestBrown",
    hexcolor: "#3B3024",
  },
  {
    name: "medBrown",
    hexcolor: "#4E433F",
  },
  {
    name: "chestnutBrown",
    hexcolor: "#705b35",
  },
  {
    name: "lightGoldenBrown",
    hexcolor: "#A7856A",
  },
  {
    name: "lightestBlonde",
    hexcolor: "#E6CEA8",
  },
  {
    name: "strawberryBlonde",
    hexcolor: "#A56B46",
  },
  {
    name: "lightAuburn",
    hexcolor: "#91553D",
  },
  {
    name: "darkestGray",
    hexcolor: "#71635A",
  },
  {
    name: "mediumGray",
    hexcolor: "#B7A69E",
  },
  {
    name: "whiteBlonde",
    hexcolor: "#FFF5E1",
  },
  {
    name: "russetRed",
    hexcolor: "#8D4A43",
  },
];

const skinColors = [
  {
    name: "paleIvory",
    hexcolor: "#e7bb98",
  },
  {
    name: "warmIvory",
    hexcolor: "#f3d39a",
  },
  {
    name: "almondBeige",
    hexcolor: "#e4ba92",
  },
  {
    name: "yellowBeige",
    hexcolor: "#ce9b6e",
  },
  {
    name: "sandBeige",
    hexcolor: "#e4bd92",
  },
  {
    name: "trueBeige",
    hexcolor: "#daae82",
  },
  {
    name: "warmBeige",
    hexcolor: "#c48b60",
  },
  {
    name: "goldenBeige",
    hexcolor: "#d9b17d",
  },
  {
    name: "honeyBeige",
    hexcolor: "#cc9778",
  },
  {
    name: "reddishTan",
    hexcolor: "#ab6d44",
  },
  {
    name: "oliveBrown",
    hexcolor: "#8f5434",
  },
  {
    name: "cafeBrown",
    hexcolor: "#b98e61",
  },
  {
    name: "goldenBrown",
    hexcolor: "#b6784f",
  },
  {
    name: "toastedBrown",
    hexcolor: "#7e5040",
  },
  {
    name: "chocolateBrown",
    hexcolor: "#73452d",
  },
  {
    name: "deepBrown",
    hexcolor: "#4f2f20",
  },
];

const eyeColors = [
  {
    name: "brown",
    hexcolor: "#634e34",
  },
  {
    name: "blue",
    hexcolor: "#2e536f",
  },
  {
    name: "blueGreen",
    hexcolor: "#2a423c",
  },
  {
    name: "hazelGreen",
    hexcolor: "#3d671d",
  },
  {
    name: "green",
    hexcolor: "#1c7847",
  },
  {
    name: "greyGreen",
    hexcolor: "#497665",
  },
  {
    name: "greyBlue",
    hexcolor: "#76948c",
  },
  {
    name: "lightBlue",
    hexcolor: "#79c4c1",
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

export default function NestedList() {
  // const classes = useStyles();

  const { chipObj, setChipObj } = useContext(ChipContext);

  console.log(chipObj);

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const applyHairColor = (name, hexcolor) => {
    setChipObj({ ...chipObj, hairColor: hexcolor });
  };

  const applySkinColor = (name, hexcolor) => {
    setChipObj({ ...chipObj, skinColor: hexcolor });
  };

  const applyEyeColor = (name, hexcolor) => {
    setChipObj({ ...chipObj, eyeColor: hexcolor });
  };

  const HairColorSelections = () => {
    return hairColors.map((haircolor) => {
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
      );
    });
  };

  const SkinColorSelections = () => {
    return skinColors.map((skincolor) => {
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
      );
    });
  };

  const EyeColorSelections = () => {
    return eyeColors.map((eyecolor) => {
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
      );
    });
  };

  const cardStyle = {
    margin: "auto",
    width: 300,
    justify: "center",
    padding: 5,
  };

  return (
    <div>
      <Box style={cardStyle} variant="square" elevation={10}>
        <Typography variant="h5">Hair Colors</Typography>
        <HairColorSelections />
      </Box>
      <hr />
      <Box style={cardStyle} variant="square" elevation={10}>
        <Typography variant="h5">Skin Tones</Typography>
        <SkinColorSelections />
      </Box>
      <hr />
      <Box style={cardStyle} variant="square" elevation={10}>
        <Typography variant="h5">Eye Colors</Typography>
        <EyeColorSelections />
      </Box>
    </div>
  );
}
