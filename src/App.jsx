import "./App.css";
import { EuropeForecast } from "./components/EuropeForecast/EuropeForecast";
import { ForecastList } from "./components/ForecastList/ForecastList";
import { Search } from "./components/Search/Search";

function App() {
  return (
    <>
      <Search />
      <ForecastList />
      <EuropeForecast />
    </>
  );
}

export default App;
