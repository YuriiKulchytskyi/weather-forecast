import { useDispatch, useSelector } from "react-redux";
import css from './UkraineForecast.module.css'
import { useEffect } from "react";
import { getWeatherForecastForUkraine } from "../../redux/weather/weatherOperations";
import { nanoid } from "nanoid";

export const UkraineForecast = () => {
  const ukrainianRegionalCenters = [
    "Kyiv",
    "Vinnytsia",
    "Lutsk",
    "Dnipro",
    "Donetsk",
    "Zhytomyr",
    "Uzhhorod",
    "Zaporizhzhia",
    "Ivano-Frankivsk",
    "Kropyvnytskyi",
    "Luhansk",
    "Lviv",
    "Mykolaiv",
    "Odesa",
    "Poltava",
    "Rivne",
    "Sumy",
    "Ternopil",
    "Kharkiv",
    "Kherson",
    "Khmelnytskyi",
    "Cherkasy",
    "Chernivtsi",
    "Chernihiv",
    "Sevastopol",
  ];

  const dispatch = useDispatch();
  const cityWeather = useSelector((state) => state.weather.ukrCityWeather);
  const isLoading = useSelector((state) => state.weather.isLoading);

  useEffect(() => {
    ukrainianRegionalCenters.forEach((capital) => {
      dispatch(getWeatherForecastForUkraine(capital));
    });
  }, [dispatch]);

  const allDataLoaded = ukrainianRegionalCenters.every((capital) => cityWeather[capital]);

  if (!allDataLoaded || isLoading) {
    return <div className={ukrainianRegionalCenters.loading}>Loading all cities...</div>;
  }

  return (
    <div className={css.capitalListContainer}>
      <ul className={css.capitalList}>
        {ukrainianRegionalCenters.map((capital) => (
          <li key={nanoid()} className={css.capitalItem}>
            <ForecastItem capital={capital} weather={cityWeather[capital]} />
          </li>
        ))}
      </ul>
    </div>
  );
};
