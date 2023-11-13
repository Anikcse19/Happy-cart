import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/Redux/features/cartSlice";

export const store = configureStore({
  reducer: {
    carts: cartReducer,
  },
});
