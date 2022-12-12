import React, { useState, useContext, useEffect, useReducer } from "react";
import { api } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
  selectedCart: [],
};

export function AppProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const response = async (id = "") => {
    dispatch({ type: "LOADING" });
    const response = await fetch(api);
    const oldCart = await response.json();
    let cart;
    if (id && id !== "all") {
      cart = oldCart
        .filter((item) => item.category === id)
        .map((item) => ({ ...item, quantity: 1 }));
    } else {
      cart = oldCart.map((item) => ({ ...item, quantity: 1 }));
    }

    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  const buy = () => {
    dispatch({ type: "CHECKOUT" });
    setCheckout((prev) => !prev);
    setIsCartOpen(false);
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };
  const clear = (id) => {
    dispatch({ type: "CLEAR", payload: id });
  };
  const showCartItems = () => {
    setIsCartOpen((prev) => !prev);
  };

  const itemCategories = (id) => {
    response(id);
    dispatch({ type: "CATEGORY", payload: id });
  };

  const selectedItems = (id) => {
    dispatch({ type: "SELECTED_ITEMS", payload: id });
  };

  useEffect(() => {
    response();
  }, []);
  if (state.cart.length === 0) return null;

  const openMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openMenu,
        isMenuOpen,
        toggleAmount,
        itemCategories,
        response,
        showCartItems,
        isCartOpen,
        selectedItems,
        clear,
        buy,
        checkout,
        setCheckout,
        closeMenu,
        setIsCartOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useEnoch = () => useContext(AppContext);
