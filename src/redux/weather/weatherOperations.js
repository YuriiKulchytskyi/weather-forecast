import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "25b83dcd87ea4198972110556240406";

axios.defaults.baseURL = "https://api.weatherapi.com/v1/"


export const getWeatherForecast = createAsyncThunk(
  "weather/getWeatherForecast",
  async (city, thunkAPI) => {
    try {
      const res = await axios.get(`current.json`, {
        params: {
          key: API_KEY,
          q: city,
          aqi: "no",
        },
      });

      return { city, data: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWeatherForecastForUkraine = createAsyncThunk(
  "weather/getWeatherForecastForUkraine",
  async (city, thunkAPI) => {
    try {
      const res = await axios.get(`current.json`, {
        params: {
          key: API_KEY,
          q: city,
          aqi: 'no'
        },
      });
      return {city, data: res.data}
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
