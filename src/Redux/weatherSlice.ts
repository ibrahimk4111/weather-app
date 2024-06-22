import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";

export interface stateType {
  status: 'idle' | 'loading' | 'succeed' | 'failed';
  weatherData: object;
  error: string | null;
}

const initialState: stateType = {
  status: "idle",
  weatherData: {},
  error: null,
}

export const weatherData = createSlice({
  name: "weather",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        state.weatherData = {};
        state.error = "";
      })
      .addCase(fetchData.fulfilled, (state, action)=>{
        state.status = "succeed";
        state.weatherData = action.payload;
        state.error = "";
      })
      .addCase(fetchData.rejected, (state, action)=>{
        state.status = "failed";
        state.error = action.error.message || 'failed to fetch data';
      })
  },
});
