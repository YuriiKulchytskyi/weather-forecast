import { useDispatch, useSelector } from "react-redux";
import { useGeolocation } from "../../hooks/LocationHook";
import { useEffect, useState } from "react";
import { getCityByLocation } from "../../redux/Info/infoOperations";
import css from './LocationWeather.module.css'; 

const LocationWeather = () => {
  const { location, error } = useGeolocation();
  const dispatch = useDispatch();
  const [city, setCity] = useState({});
  const computed_location = useSelector((state) => state.info.computed_location);

  useEffect(() => {
    if (location && location.latitude && location.longitude) {
      dispatch(getCityByLocation({ lat: location.latitude, lon: location.longitude }));
    }
  }, [location, dispatch]);

  useEffect(() => {
    if (computed_location) {
      setCity(computed_location);
      console.log("Updated City:", computed_location);
    }
  }, [computed_location]);

  return (
    <div className={css.weatherContainer}>
      {error && <p className={css.errorMessage}>{error}</p>}
      {city && Object.keys(city).length > 0 && (
        <div>
          <h1 className={css.cityTitle}>Weather in {city.location.name}, {city.location.country}</h1>
          <p>Time: {city.location.localtime}</p>

          <div className={css.weatherInfo}>
            <div className={css.weatherTemp}>
              <h2>{city.current.temp_c}°C</h2>
              <p>Feels like: {city.current.feelslike_c}°C</p>
              <p>Description: {city.current.condition.text}</p>
              <img
                src={`https:${city.current.condition.icon}`}
                alt={city.current.condition.text}
              />
            </div>

            <div className={css.weatherStats}>
              <h3>Wind:</h3>
              <p>Speed: {city.current.wind_kph} км/год</p>
              <p>Direction: {city.current.wind_dir}</p>

              <h3>Інші показники:</h3>
              <p>Humidity: {city.current.humidity}%</p>
              <p>Точка роси: {city.current.dewpoint_c}°C</p>
              <p>Preasure: {city.current.pressure_mb} мб</p>
              <p>Visibility: {city.current.vis_km} км</p>
              <p>Index UV: {city.current.uv}</p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default LocationWeather;
