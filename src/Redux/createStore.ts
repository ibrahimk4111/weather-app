import { configureStore } from "@reduxjs/toolkit";
import { weatherData } from "./weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherData.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch