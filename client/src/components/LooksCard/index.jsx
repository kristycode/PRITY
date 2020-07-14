import React from "react";
import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
import RandomAvatar from "../Homepage/staticImages/RandomAvatar";

const LooksCard = (props) => {
  const homeCardsStyle = {
    textAlign: "center",
    // margin: 5,
    // padding: 0,
    backgroundColor: "#f7c4c4",
    // padding: 10,
    borderRadius: 10,
    margin: 10,
    borderColor: "#C47CA8",
    borderStyle: "outset",
  };

  return (
    <Card style={homeCardsStyle}>
      <CardContent>
        <RandomAvatar />
      </CardContent>
    </Card>
  );
};

export default LooksCard;
