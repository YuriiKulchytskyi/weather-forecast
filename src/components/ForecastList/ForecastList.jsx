// ForecastList.js
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityForecast } from "../../redux/Info/infoOperations";
import { nanoid } from "nanoid";
import css from "./ForecastList.module.css";
import { useParams } from "react-router-dom";
import { NextDayForecast } from "../NextDayForecast/NextDayForecast";

export const ForecastList = () => {
  const { city } = useParams();
  const dispatch = useDispatch();
  const location_forecast = useSelector(
    (state) => state.info.location_forecast
  );
  const [selectedDay, setSelectedDay] = useState(null);

  const handleInfo = (day) => {
    if (selectedDay?.date === day.date) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
    }
  };

  useEffect(() => {
    if (!city) return;
    dispatch(getCityForecast(city));
  }, [city]);

  return (
    <>
      <h1>{city}</h1>
      <ul className={css.forecastWrapper}>
        {!location_forecast ? (
          <p>Choose location</p>
        ) : (
          location_forecast.map((day) => (
            <NextDayForecast
              key={nanoid()}
              day={day}
              selectedDay={selectedDay}
              handleInfo={handleInfo}
            />
          ))
        )}
      </ul>
    </>
  );
};
