import React, { Component, useContext, useState, Fragment } from "react";
// import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Typography } from "@material-ui/core";
import ChipContext from "../Context/ChipContext";

const BeautyBag = () => {
    const { chipObj, setChipObj } = useContext(ChipContext);

    return (

        <div className="col">
                
            <h1>my selected products:</h1>
            
            {chipObj.map(product => 
            <div>
            <div>{product.productType}</div>
            <div>{product.brand}</div>
            <div>{product.name}</div>
            <div>{product.color_name}</div>
            <div>{product.hexColor}</div>
            </div>)}

        </div>

    )
};

export default BeautyBag