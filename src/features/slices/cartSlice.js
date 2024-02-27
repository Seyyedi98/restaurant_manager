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
      state.cart = [...state.cart, action.payload];
      updateLocalStorageCart(state.cart);
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      updateLocalStorageCart(state.cart);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
