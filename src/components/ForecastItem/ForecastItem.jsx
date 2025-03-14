import css from "./ForecastItem.module.css";

export const ForecastItem = ({ capital, weather }) => {
  if (!weather || !weather.current) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={css.capitalForecastItem}>
      <h3>{capital}</h3>
      <p>{weather.current.temp_c}&deg;C </p>
      <p>{weather.location.localtime.split(" ")[1]}</p>
      <p>{weather.current.condition.text}</p>
      <img
        src={`https:${weather.current.condition.icon}`}
        alt={weather.current.condition.text}
        className={css.icon}
      />
    </div>
  );
};
