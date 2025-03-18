import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCityInfo } from "../../redux/Info/infoOperations";
import { Outlet, useNavigate } from "react-router-dom";
import css from "./Search.module.css";

export const Search = () => {
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setResult(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCityInfo(result));
    navigate(`/forecast/${result}`);
    setResult("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          name="location"
          placeholder="Enter city..."
          onChange={handleChange}
          value={result}
          className={css.input}
        />
        <button type="submit" disabled={result.trim().length < 4} className={css.button}>
          Search
        </button>
      </form>
      <Outlet />
    </>
  );
};
