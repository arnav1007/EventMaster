// Store- Central storage for saving and accesing the states and functioanlities wherever required in the app.

import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";

export const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});
