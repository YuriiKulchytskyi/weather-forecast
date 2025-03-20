import { configureStore } from "@reduxjs/toolkit";
import { infoReducer } from "./Info/infoSlice";
import { weatherReducer } from "./weather/weatherSlice";
import { themeReducer } from "./theme/theme";


export const store = configureStore({
    reducer:{
        info: infoReducer,
        weather: weatherReducer,
        theme: themeReducer
    }
})