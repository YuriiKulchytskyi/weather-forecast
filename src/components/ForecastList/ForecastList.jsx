import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityForecast } from "../../redux/Info/infoOperations";
import { nanoid } from "nanoid";

export const ForecastList = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.info.location);
  const location_forecast = useSelector(
    (state) => state.info.location_forecast
  );

  useEffect(() => {
    if(!location) return;
    dispatch(getCityForecast(location));
  }, [location]);

  return (
    <ul>
      {!location_forecast ? (
        <p>Choose location</p>
      ) : (
        location_forecast.map((day) => <li key={nanoid()}>
            <p>{day.date}</p>
            <p>Max temp: {day.day.maxtemp_c}C</p>
            <p>Mix temp: {day.day.mintemp_c}C</p>
        </li>)
      )}
    </ul>
  );
};
