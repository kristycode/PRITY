import React, { useState } from "react";

export const BeautyBagContext = React.createContext();

export const BeautyBagProvider = (props) => {
  const [beautyBag, setBeautyBag] = useState();

  return (
    <BeautyBagContext.Provider value={[beautyBag, setBeautyBag]}>
      {props.children}
    </BeautyBagContext.Provider>
  );
};
