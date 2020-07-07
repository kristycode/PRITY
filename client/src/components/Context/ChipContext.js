import { createContext } from "react";

const ChipContext = createContext({
    eyeshadow: null,
    eyeliner: null,
    blush: null,
    bronzer: null,
    lipstick: null,
    beautyBag: [],
});

export default ChipContext;
