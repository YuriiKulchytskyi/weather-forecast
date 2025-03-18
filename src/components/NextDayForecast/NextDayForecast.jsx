import css from '../ForecastList/ForecastList.module.css'

export const NextDayForecast = ({ day, selectedDay, handleInfo }) => {
    return (
      <li className={css.forecastPerDay}>
        <p>{day.date}</p>
        <p>Max temp: {day.day.maxtemp_c}C</p>
        <p>Min temp: {day.day.mintemp_c}C</p>
        <button type="button" onClick={() => handleInfo(day)}>
          {selectedDay?.date === day.date ? "Hide more" : "Show more"}
        </button>
  
        {selectedDay?.date === day.date && (
          <div className={css.moreInfo}>
            <p>Humidity: {day.day.avghumidity}%</p>
            <p>Wind speed: {day.day.maxwind_kph} km/h</p>
            <p>Sunrise: {day.astro.sunrise}</p>
            <p>Sunset: {day.astro.sunset}</p>
          </div>
        )}
      </li>
    );
  };
