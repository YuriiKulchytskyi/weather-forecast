import { createSlice } from "@reduxjs/toolkit";
import { getCityByLocation, getCityForecast, getCityInfo } from "./infoOperations";

const initialState = {
  location: '',
  computed_location: {},
  location_forecast: [],
  isLoading: false,
  error: null,
};

const infoSlice = createSlice({
  name: "location",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCityInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCityInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCityInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.location = action.payload;
      })
      .addCase(getCityForecast.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCityForecast.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCityForecast.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.location_forecast = action.payload;
      })
  
      .addCase(getCityByLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCityByLocation.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getCityByLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.computed_location = action.payload; 
      });
  },
});

export const infoReducer = infoSlice.reducer;