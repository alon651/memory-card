import React, { createContext } from "react";

export const scoreContext = createContext({
  highScore: 0,
  setHigh: () => {},
  currentScore: 0,
  setCurrent: () => {},
});
