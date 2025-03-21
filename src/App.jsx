import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EuropeForecast } from "./components/EuropeForecast/EuropeForecast";
import { Search } from "./components/Search/Search";
import { Forecast } from "./pages/Forecast";
import { Layout } from "./components/Layout/Layout";
import LocationWeather from "./components/LocationWeather/LocationWeather";
import { MainPage } from "./pages/MainPage";


function App() {



  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage/>}></Route>
        <Route path="/forecast" element={<Search />}>
          <Route path=":city" element={<Forecast />} />
        </Route>
        <Route path="/europe" element={<EuropeForecast/>}/>
      </Route>
    </Routes>

  );
}

export default App;
