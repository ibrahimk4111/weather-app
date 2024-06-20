/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "./apiCall";

interface paramType {
  city: string; 
  units: "metric" | "imperial"
}

export const fetchData = createAsyncThunk<any, paramType>("weather/fetchWeather", async ({city, units}):Promise<any>=>{
  const data = (await apiCall("weather", { q: city }));
  const { lat, lon } = data.coord;
  const weatherStatement = await apiCall("weather", { lat, lon, units });
  const hourlyStatement = await apiCall("forecast", { lat, lon, units });
  const airPollutionStatement = await apiCall("air_pollution", { lat, lon, units });

    return {
      weatherStatement,
      hourlyStatement, 
      airPollutionStatement,
      units
    };
  });