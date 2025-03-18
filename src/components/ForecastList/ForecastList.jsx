import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityForecast } from "../../redux/Info/infoOperations";
import { useParams } from "react-router-dom";
import { NextDayForecast } from "../NextDayForecast/NextDayForecast";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import css from "./ForecastList.module.css";

export const ForecastList = () => {
  const { city } = useParams();
  const dispatch = useDispatch();
  const location_forecast = useSelector(
    (state) => state.info.location_forecast
  );

  const [selectedDay, setSelectedDay] = useState(null);
  const [dataInfo, setDataInfo] = useState(null);

  const handleInfo = (day) => {
    setSelectedDay(selectedDay?.date === day.date ? null : day);
  };

  useEffect(() => {
    if (location_forecast?.length > 0) {
      setSelectedDay(location_forecast[0]);
    } else {
      setSelectedDay(null);
    }
  }, [location_forecast]);

  useEffect(() => {
    if (!city) return;
    dispatch(getCityForecast(city));
  }, [city, dispatch]);

  useEffect(() => {
    if (!selectedDay) {
      setDataInfo(null);
      return;
    }
    const data = {
      labels: selectedDay.hour.map((hour) => hour.time.slice(11, 16)),
      datasets: [
        {
          label: "Temperatur",
          data: selectedDay.hour.map((hour) => hour.temp_c),
          borderColor: "red",
          backgroundColor: "rgba(255, 0, 0, 0.3)",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Feels like",
          data: selectedDay.hour.map((hour) => hour.feelslike_c),
          borderColor: "orange",
          backgroundColor: "rgba(247, 189, 113, 0.82)",
          fill: false,
          tension: 0.5,
        },
      ],
    };
    setDataInfo(data);
  }, [selectedDay]);

  return (
    <>
      <h1>{city}</h1>
      <ul className={css.forecastWrapper}>
        {!location_forecast ? (
          <p>Choose location</p>
        ) : (
          location_forecast.map((day) => (
            <NextDayForecast
              key={day.date}
              day={day}
              handleInfo={handleInfo}
            />
          ))
        )}
      </ul>

      {dataInfo && (
        <div className={css.canvaContainer}>
          <div className={css.chartWrapper}>
            <Line data={dataInfo} className={css.canva} />
          </div>
        </div>
      )}
    </>
  );
};
