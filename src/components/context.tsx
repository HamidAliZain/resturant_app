import { useContext, useState } from "react";
import { createContext } from "react";
const state = {
  cart: [],
};
export const Context = createContext<any>(state);
const ContextProvider = () => {
  const [cart, setCart] = useState();
  return <Context.Provider value={cart}></Context.Provider>;
};

export default ContextProvider;
