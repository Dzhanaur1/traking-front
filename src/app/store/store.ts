import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./libs/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { authSlice },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
