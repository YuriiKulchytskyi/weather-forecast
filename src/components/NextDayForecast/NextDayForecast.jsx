import css from "../ForecastList/ForecastList.module.css";

export const NextDayForecast = ({ day, handleInfo }) => {

  const date = new Date(day.date)
  const dateOfMonth = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, "0");

  


  return (
    <li className={css.forecastPerDay} onClick={() => handleInfo(day)}>
      <p>{dateOfMonth}.{month}</p>
      <p>Max temp: {day.day.maxtemp_c}°C</p>
      <p>Min temp: {day.day.mintemp_c}°C</p>
        <div className={css.moreInfo}>
          <p>Humidity: {day.day.avghumidity}%</p>
          <p>Wind speed: {day.day.maxwind_kph} km/h</p>
          <p>Sunrise: {day.astro.sunrise}</p>
          <p>Sunset: {day.astro.sunset}</p>
        </div>
    </li>
  );
};
