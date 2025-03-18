import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWeatherForecast } from "../../redux/weather/weatherOperations";
import css from "./EuropeForecast.module.css";
import { nanoid } from "nanoid";
import { ForecastItem } from "../ForecastItem/ForecastItem";
import { useNavigate } from "react-router-dom";

export const EuropeForecast = () => {
  const europeanCapitals = [
    "London",
    "Paris",
    "Rome",
    "Amsterdam",
    "Madrid",
    "Vienna",
    "Berlin",
    "Barcelona",
    "Prague",
    "Kyiv",
    "Athens",
    "Lisbon",
    "Copenhagen",
    "Brussels",
    "Stockholm",
    "Warsaw",
    "Oslo",
    "Dublin",
    "Reykjavik",
    "Zurich",
    "Helsinki",
    "Tbilisi",
    "Budapest",
    "Luxembourg",
    "Belgrade",
    "Monaco",
    "San Marino",
    "Chisinau",
    "Vilnius",
    "Sarajevo",
    "Minsk",
    "Skopje",
    "Podgorica",
    "Tallinn",
    "Riga",
    "Pristina",
    "Bratislava",
    "Ljubljana",
    "Tirana",
    "Andorra la Vella",
    "Vatican City",
    "Bucharest",
    "Valletta",
    "Berlin",
    "Athens",
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cityWeather = useSelector((state) => state.weather.cityWeather);
  const isLoading = useSelector((state) => state.weather.isLoading);

  useEffect(() => {
    europeanCapitals.forEach((capital) => {
      dispatch(getWeatherForecast(capital));
    });
  }, [dispatch]);

  const allDataLoaded = europeanCapitals.every(
    (capital) => cityWeather[capital]
  );

  if (!allDataLoaded || isLoading) {
    return (
      <div className={europeanCapitals.loading}>Loading all cities...</div>
    );
  }

  return (
    <div className={css.capitalListContainer}>
      <ul className={css.capitalList}>
        {europeanCapitals.map((capital) => (
          <li
            key={nanoid()}
            className={css.capitalItem}
            onClick={() => navigate(`/forecast/${capital}`)}
          >
            <ForecastItem capital={capital} weather={cityWeather[capital]} />
          </li>
        ))}
      </ul>
    </div>
  );
};
