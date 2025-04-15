import modals from "../redux/modals";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    modals,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
