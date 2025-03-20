import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "25b83dcd87ea4198972110556240406";

const BASE_URL = "http://api.weatherapi.com/v1/"

export const getWeatherForecast = createAsyncThunk(
  "weather/getWeatherForecast",
  async (city, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}current.json`, {
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
      const res = await axios.get(`${BASE_URL}current.json`, {
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
