import React, { useState } from "react";

export const BeautyBagContext = React.createContext({
  productType: "eyeshadow",
  productName: "PHOTO OP EYE SHADOW SINGLES",
  productBrand: "Smashbox",
  productColor: "Vintage",
  productHex: "#4d302f",
});

export const BeautyBagProvider = (props) => {
  const [beautyBag, setBeautyBag] = useState();

  return (
    <BeautyBagContext.Provider value={[beautyBag, setBeautyBag]}>
      {props.children}
    </BeautyBagContext.Provider>
  );
};
