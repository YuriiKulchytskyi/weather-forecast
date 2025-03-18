import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCityInfo } from "../../redux/Info/infoOperations";
import { Outlet, useNavigate } from "react-router-dom";

export const Search = () => {
  const [result, setResult] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setResult(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCityInfo(result));
    navigate(`/forecast/${result}`)
    setResult('')
  };

  return (
<>
<form onSubmit={handleSubmit}>
      <input
        type="text"
        name="location"
        placeholder="Search"
        onChange={handleChange}
      />
      <button type="submit" disabled={result.trim().length < 4}>
        Search
      </button>
    </form>
    <Outlet />
</>  );
};
