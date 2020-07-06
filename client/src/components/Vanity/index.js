import React, { useContext } from "react";
import { BeautyBagContext } from "../../utils/beautyBagContext";
// import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Typography } from "@material-ui/core";
import { ChipContext } from "../../components/Context/ChipContext"
import EyeshadowCall from "../Calls/EyeshadowCall";
import EyelinerCall from "../Calls/EyeLinerCall";
import BronzerCall from "../Calls/EyeLinerCall";
import BeautyBag from "../BeautyBag";
import API from "../../utils/API";

// const BeautyBagContents = () => {
//   const [beautyBag, setBeautyBag] = useContext(BeautyBagContext);
// };

export default function Vanity(){


          return (
            <div>
                <BeautyBag />
            </div>
          );
}
