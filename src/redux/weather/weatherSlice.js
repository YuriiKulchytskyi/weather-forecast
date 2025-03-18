import { createSlice } from "@reduxjs/toolkit";
import {
  getWeatherForecast,
  getWeatherForecastForUkraine,
} from "./weatherOperations";

const initialState = {
  cityWeather: {},
  ukrCityWeather: {},
  error: null,
  isLoading: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherForecast.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeatherForecast.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getWeatherForecast.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        const { city, data } = action.payload;
        state.cityWeather[city] = data;
      });
    // .addCase(getWeatherForecastForUkraine.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getWeatherForecastForUkraine.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })
    // .addCase(getWeatherForecastForUkraine.fulfilled, (state, action) => {
    //   state.error = null;
    //   state.isLoading = false;
    //   const { city, data } = action.payload;
    //   state.ukrCityWeather[city] = data;
    // });
  },
});

export const weatherReducer = weatherSlice.reducer;
