import { configureStore } from "@reduxjs/toolkit";
import { infoReducer } from "./Info/infoSlice";
import { weatherReducer } from "./weather/weatherSlice";


export const store = configureStore({
    reducer:{
        info: infoReducer,
        weather: weatherReducer
    }
})