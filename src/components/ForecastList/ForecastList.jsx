import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityForecast } from "../../redux/Info/infoOperations";
import { nanoid } from "nanoid";
import css from "./ForecastList.module.css";
import { useParams } from "react-router-dom";

export const ForecastList = () => {
  const { city } = useParams()
  const dispatch = useDispatch();
  // const location = useSelector((state) => state.info.location);
  const location_forecast = useSelector(
    (state) => state.info.location_forecast
  );



  
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
          <li key={nanoid()} className={css.forecastPerDay}>
            <p>{day.date}</p>
            <p>Max temp: {day.day.maxtemp_c}C</p>
            <p>Mix temp: {day.day.mintemp_c}C</p>
          </li>
        ))
      )}
    </ul>
</>
  );
};
