import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};