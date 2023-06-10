import { configureStore } from "@reduxjs/toolkit";
import counterHeaderNav from "../feature/HeaderNavData";

export const store = configureStore({
  reducer: {
    counterNav: counterHeaderNav,
  },
});
