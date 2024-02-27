import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
