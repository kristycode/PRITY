import React, { Component, useContext, useState, Fragment } from "react";
// import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Typography } from "@material-ui/core";
import ChipContext from "../Context/ChipContext";

const BeautyBag = () => {
    const { chipObj, setChipObj } = useContext(ChipContext);

    return (

        <div className="col">
        <h1>My Makeup Bag!</h1>
        <p>these are my products in my makeup bag</p>
        {chipObj.map(chip => 
        <div>
        <div>{chip.productType}</div>
        <div>{chip.brand}</div>
        <div>{chip.name}</div>
        <div>{chip.color_name}</div>
        <div>{chip.hexColor}</div>
        </div>)}
      </div>

    )
};

export default BeautyBag