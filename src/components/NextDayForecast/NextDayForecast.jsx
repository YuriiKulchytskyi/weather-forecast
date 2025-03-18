import { useEffect, useState } from "react";
import css from "../ForecastList/ForecastList.module.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const NextDayForecast = ({ day, selectedDay, handleInfo }) => {
  const [dataInfo, setDataInfo] = useState(null);

  useEffect(() => {
    const data = {
      labels: day.hour.map((hour) => hour.time.slice(11, 16)),
      datasets: [
        {
          label: "Temperature",
          data: day.hour.map((hour) => hour.temp_c),
          borderColor: "red",
          fill: false,
        },
      ],
    };
    setDataInfo(data);
  }, [day]);

  return (
    <li className={css.forecastPerDay}>
      <p>{day.date}</p>
      <p>Max temp: {day.day.maxtemp_c}°C</p>
      <p>Min temp: {day.day.mintemp_c}°C</p>
      <button type="button" onClick={() => handleInfo(day)}>
        {selectedDay?.date === day.date ? "Hide more" : "Show more"}
      </button>

      {selectedDay?.date === day.date && (
        <div className={css.moreInfo}>
          <p>Humidity: {day.day.avghumidity}%</p>
          <p>Wind speed: {day.day.maxwind_kph} km/h</p>
          <p>Sunrise: {day.astro.sunrise}</p>
          <p>Sunset: {day.astro.sunset}</p>
          {dataInfo && (
            <div className={css.chartWrapper}>
              <Line data={dataInfo} />
            </div>
          )}
        </div>
      )}
    </li>
  );
};
