import React, { useContext } from "react";
import { BeautyBagContext } from "../../utils/beautyBagContext";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Typography } from "@material-ui/core";

const BeautyBag = () => {
  const [beautyBag, setBeautyBag] = useContext(BeautyBagContext);
  return (
    <span>
      <LocalMallIcon />
      <Typography>items:{beautyBag}</Typography>
    </span>
  );
};

export default BeautyBag;
