import { createSlice } from "@reduxjs/toolkit";

const storedValue = localStorage.getItem("cartLocalData");
const value = storedValue ? JSON.parse(storedValue) : [];

const updateLocalStorageCart = function (data) {
  localStorage.setItem("cartLocalData", JSON.stringify(data));
};

const initialState = {
  cart: value,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemExistsInCart = state.cart.some(
        (item) => item.id === action.payload.id
      );
      if (itemExistsInCart) {
        const item = state.cart.find((item) => item.id === action.payload.id);
        item.quantity++;
      } else {
        state.cart = [...state.cart, action.payload];
      }

      updateLocalStorageCart(state.cart);
    },

    IncItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      updateLocalStorageCart(state.cart);
    },

    decItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      updateLocalStorageCart(state.cart);
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      updateLocalStorageCart(state.cart);
    },
  },
});

export const { addToCart, removeFromCart, IncItem, decItem } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
