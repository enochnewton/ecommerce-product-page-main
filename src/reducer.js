const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.type === "inc") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action.payload.type === "dec") {
          if (item.quantity === "1") {
            return { ...item, quantity: item.quantity === 1 };
          } else if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "CATEGORY") {
    if (action.payload === "jewelery") {
      let newItems = state.cart.filter(
        (item) => item.category === action.payload
      );
      return { ...state, cart: newItems };
    }
    if (action.payload === "electronics") {
      let newItems = state.cart.filter(
        (item) => item.category === action.payload
      );
      return { ...state, cart: newItems };
    }
    if (action.payload === "men's clothing") {
      let newItems = state.cart.filter(
        (item) => item.category === action.payload
      );
      console.log(state);
      return { ...state, cart: newItems };
    }
    if (action.payload === "women's clothing") {
      let newItems = state.cart.filter(
        (item) => item.category === action.payload
      );
      return { ...state, cart: newItems };
    }
    if (action.payload === "all") {
      return { ...state };
    }
    return state;
  }
  if (action.type === "SELECTED_ITEMS") {
    let selectedProducts = state.cart.find(
      (item) => item.id === action.payload
    );
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, quantity: 1 };
      } else {
        return { ...item };
      }
    });
    if (state.selectedCart.length !== 0) {
      const anothCart = state.selectedCart.filter((item) => {
        return item.id !== selectedProducts.id;
      });

      const selProd = {
        ...selectedProducts,
        quantity: selectedProducts.quantity + 1,
      };

      return {
        ...state,
        selectedCart: [...anothCart, selProd],
        cart: newCart,
      };
    } else {
      return {
        ...state,
        selectedCart: [...state.selectedCart, selectedProducts],
        cart: newCart,
      };
    }
  }
  if (action.type === "CLEAR") {
    let selectedProducts = state.selectedCart.filter(
      (item) => item.id !== action.payload
    );

    return {
      ...state,
      selectedCart: selectedProducts,
    };
  }
  if (action.type === "CHECKOUT") {
    return { ...state, selectedCart: [] };
  }
  throw new Error("no matching action type");
};
export default reducer;
