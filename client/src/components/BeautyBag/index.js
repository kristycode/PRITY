import React, { useContext } from "react";
import { BeautyBagContext } from "../../utils/beautyBagContext";
// import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Typography } from "@material-ui/core";

const BeautyBag = () => {
  const [beautyBag, setBeautyBag] = useContext(BeautyBagContext);
  return <Typography>this is the beauty bag component{beautyBag}</Typography>;
};

export default BeautyBag;
