import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "25b83dcd87ea4198972110556240406";

const BASE_URL = "https://api.weatherapi.com/v1/";

export const getCityInfo = createAsyncThunk(
  "info/getCityInfo",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}current.json`, {
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
      const response = await axios.get(`${BASE_URL}forecast.json`, {
        params: {
          key: API_KEY,
          q: credentials,
          days: 5,
          aqi: "no",
          alerts: "no",
        },
      });
      console.log(response.data);

      return response.data.forecast.forecastday;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getCityByLocation = createAsyncThunk(
  "info/getCityByLocation",
  async (credentials, thunkAPI) => {
    try {
      const { lat, lon } = credentials;

      if (!lat || !lon) {
        return thunkAPI.rejectWithValue("Invalid coordinates");
      }

      const response = await axios.get(`${BASE_URL}current.json`, {
        params: {
          key: API_KEY,
          q: `${lat},${lon}`,
          aqi: "no",
        },
      });

      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
