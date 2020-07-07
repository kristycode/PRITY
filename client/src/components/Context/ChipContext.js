import { createContext } from "react";

const ChipContext = createContext({
    eyeshadow: null,
    eyeliner: null,
    blush: null,
    bronzer: null,
    lipstick: null,
    
    beautyBag: [],

    hairColor: null,
    skinColor: null,
    eyeColor: null,

});

export default ChipContext;
