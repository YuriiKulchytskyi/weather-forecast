import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EuropeForecast } from "./components/EuropeForecast/EuropeForecast";
import { Search } from "./components/Search/Search";
import { Forecast } from "./pages/Forecast";
import { Layout } from "./components/Layout/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EuropeForecast />}></Route>
        <Route path="/forecast" element={<Search />}>
          <Route path=":city" element={<Forecast />} />
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
