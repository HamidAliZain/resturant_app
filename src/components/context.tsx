"use client";
import { ReactNode, useState, createContext } from "react";
const state = {
  cart: [],
  setCart: () => null,
};
export const CartContext = createContext<any>(state);
const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
