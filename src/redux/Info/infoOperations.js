import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "25b83dcd87ea4198972110556240406";

axios.defaults.baseURL = "https://api.weatherapi.com/v1/"


export const getCityInfo = createAsyncThunk(
  "info/getCityInfo",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`current.json`, {
        params: {
          key: API_KEY,
          q: credentials,
          aqi: "no",
        },
      });
      return response.data.location.name;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCityForecast = createAsyncThunk(
  "info/getCityForecast",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`forecast.json`, {
        params: {
          key: API_KEY,
          q: credentials,
          days: 5,
          aqi: "no",
          alerts: "no"
        },
      });
      console.log(response.data.forecast.forecastday);
      
      return response.data.forecast.forecastday;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


