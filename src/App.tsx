import "./App.css";
import MainDegreeShowCase from "./Components/TodayWeather/MainDegreeShowCase";
import SearchBar from "./Components/SearchBar";
// import rainy from '../public/rainy.jpg'
import HourlyForcast from "./Components/HourlyForcast/HourlyForcast";
import NavBar from "./Components/NavBar";
import NextDays from "./Components/NextDays/NextDays";
import clear from "../public/clear.jpg";
import { useEffect, useState } from "react";
import { FullWeatherData, getWeather } from "./Components/Redux/ApiCall";

export interface storedDataType {
  city: string;
  fullData: FullWeatherData;
}

function App() {
  // const [storedData, setStoredData] = useState<storedDataType[]>([]);

  const [city, setCity] = useState<string>("Dhaka");
  const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const [data, setData] = useState<FullWeatherData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const fullData = await getWeather(city, units);
      setData(fullData);
    };
    fetchData();
  }, [city, units]);

  return (
    <div className="relative min-h-screen py-3">
      <div className=" fixed top-0 left-0 overflow-hidden -z-50">
        <img
          src={clear}
          alt="clear"
          className=" w-full min-h-screen h-full object-cover "
        />
      </div>
      <NavBar />
      <SearchBar
        setCity={setCity}
        setUnits={setUnits}
      />
      <MainDegreeShowCase data={data} />
      <HourlyForcast />
      <NextDays data={data} />
    </div>
  );
}

export default App;
